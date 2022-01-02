class Solution {
    
    boolean checkDuplicate(char[] list) {
       Set<Integer> set = new TreeSet<Integer>(); 
       for(char c:list) {
           if(c!='.') {
              int num = Character.getNumericValue(c);
              boolean isDuplicated = set.add(num);
              if(isDuplicated==false) {
                  return false;
              }
           }
       }
       return true;
    }
    
    public boolean isValidSudoku(char[][] board) {
        //Row
        for(int i=0;i<9;i++) {
          char[] rowList = new char[9];
          for(int j=0;j<9;j++) {
           rowList[j] = board[i][j];
          }
          boolean isDuplicated = checkDuplicate(rowList);
          if(isDuplicated==false) return false; 
        }
        
        //Column
        for(int i=0;i<9;i++) {
          char[] colList = new char[9];
          for(int j=0;j<9;j++) {
            colList[j] = board[j][i];  
          }
          boolean isDuplicated = checkDuplicate(colList);
          if(isDuplicated==false) return false; 
        }
        
        //Grid
        for(int i=0;i<=6;i+=3) {
          for(int j=0;j<=6;j+=3) {
             Set<Integer> set = new HashSet<Integer>();
             for(int k1=i;k1<=i+2;k1++) {
               for(int k2=j;k2<=j+2;k2++) {
                  if(board[k1][k2]!='.') { 
                     boolean isDuplicated = set.add(Character.getNumericValue(board[k1][k2]));
                     if(isDuplicated==false) return false; 
                  } 
               }  
             }
          }
        }
        return true;
    }
    
}
