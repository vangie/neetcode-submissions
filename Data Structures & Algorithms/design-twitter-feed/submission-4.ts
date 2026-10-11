interface Tweet {
    id: number;
    time: number;
}

class Twitter {
    private tweetsMap: Map<number, Tweet[]>;
    private followsMap: Map<number, Set<number>>;
    private time: number;

    constructor() {
        this.tweetsMap = new Map();
        this.followsMap = new Map();
        this.time = 0;
    }

    /**
     * 发布推文
     */
    postTweet(userId: number, tweetId: number): void {
        let tweets = this.tweetsMap.get(userId);

        if (!tweets) {
            tweets = [];
            this.tweetsMap.set(userId, tweets);
        }

        tweets.push({
            id: tweetId,
            time: this.time++
        });
    }


    /**
     * 获取新闻流
     */
    getNewsFeed(userId: number): number[] {

        // 按时间排序
        const q = new MinPriorityQueue(
            (tweet: Tweet) => tweet.time
        );


        // 自己 + 所关注的人
        const users = [
            userId,
            ...(this.followsMap.get(userId) ?? [])
        ];


        for (let user of users) {

            for (let tweet of this.tweetsMap.get(user) ?? []) {

                q.enqueue(tweet);

                // 只保留最新10条
                if (q.size() > 10) {
                    q.dequeue();
                }
            }
        }


        const res: number[] = [];

        while (!q.isEmpty()) {
            res.push(q.dequeue().id);
        }


        return res.reverse();
    }


    /**
     * 关注
     */
    follow(
        followerId: number,
        followeeId: number
    ): void {

        let follows = this.followsMap.get(followerId);

        if (!follows) {
            follows = new Set();
            this.followsMap.set(
                followerId,
                follows
            );
        }

        follows.add(followeeId);
    }


    /**
     * 取消关注
     */
    unfollow(
        followerId: number,
        followeeId: number
    ): void {

        const follows = this.followsMap.get(followerId);

        if (follows) {
            follows.delete(followeeId);
        }
    }
}