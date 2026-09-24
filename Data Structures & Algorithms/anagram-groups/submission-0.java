class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> grpMap = new HashMap<String, List<String>>();

        for(int i=0;i<strs.length;i++){
            String s = strs[i];
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String sortedStr = new String(chars);

            if(grpMap.containsKey(sortedStr)){
                List strList = grpMap.get(sortedStr);
                strList.add(s);
            } else {
                List strList = new ArrayList<String>();
                strList.add(s);
                grpMap.put(sortedStr, strList);
            }
        }
        return grpMap.values()
        .stream()
        .collect(Collectors.toList());
    }
}
