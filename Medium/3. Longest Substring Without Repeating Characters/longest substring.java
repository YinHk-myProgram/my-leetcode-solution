class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        
        Map<Integer, String> map = new HashMap<>();
        if(s.isBlank()) {
            if(s.isEmpty())
              return 0;
             else return 1;
            
        } else if(s.length()==1) {
           return 1; 
        } else {
           for(int i=0; i<s.length(); i++) {
             
            String subStr = s.substring(i, i+1);
            for(int j=i+1; j<s.length(); j++) {
                if(!subStr.contains(s.substring(j, j+1))) {
                    subStr = s.substring(i, j+1);
                } else {
                    map.put(j-i, subStr);
                    break;
                }
                map.put(j-i+1, subStr);  
            }
           } 
        }
        
        
        int length = 0;
        
        for(Map.Entry<Integer, String> entry : map.entrySet()) {
            if(entry.getKey() > length)
                length = entry.getKey();
        }
        return length;
        
    }
}
