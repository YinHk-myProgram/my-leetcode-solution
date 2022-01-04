/*
   max profit = max price  -  min price 
   single for loop search for max profit
   if ( price in current day - the min price before current day ) larges than max profit, set this difference as max profit
*/


class Solution {
    
    public int maxProfit(int[] prices) {
      
      int i = 0, min = prices[0], profit = 0;
     
      while(i<prices.length) {
        
        if(prices[i] < min) min = prices[i];
          else {
            if(prices[i]-min > profit) profit = prices[i]-min;
          }
        i++;
          
      }
      return profit;
        
    }
    
}

