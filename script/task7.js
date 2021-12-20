// Maximum Profits

// Suppose we could access yesterday’s prices for a certain stock as a chronological list. 
// Write a function that takes the list and returns the highest profit possible from one purchase and one sale of the stock yesterday.

// For example, a stock price list of [10, 7, 5, 8, 11, 9] shows that the stock started at 10 and ended at 9, 
// going through the numbers chronologically. There is at least a 1-minute difference between the stock prices.

// Taking that array as input, our function should return 6, 
// the maximum possible profit from buying when the price was 5 and selling when the price was 11.

// If no profit can be made, return 0.

// No “shorting” — you must buy before you sell. You may not buy and sell in the same time step.

// Input: Array of Numbers
// Output: Number

function getMaxProfit(prices) {
   let min=prices[0];
   let minInd=0;
   let max=prices[prices.length-1];
   let maxInd=prices.length-1;
        for (let i=1; i<=prices.length-2; i+=1){
            if (prices[i]<min & i<maxInd){
                min=prices[i];
                minInd=i;

            } else if(prices[i]>max & i>minInd){
                max=prices[i];
                maxInd=i;
            }
        }
    let result= max-min;
    if (result>0) {
        return result
    } else { 
        return 0;
    }
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
// -> 6
console.log(getMaxProfit([5, 4, 3, 2, 1]));
// -> 0