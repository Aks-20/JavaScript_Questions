const maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = prices[0]; // Initialize minPrice with the first price
  
    for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
      
      // Update minimum price
      minPrice = Math.min(minPrice, currentPrice);
      
      // Calculate potential profit and update maxProfit
      const potentialProfit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  
    return maxProfit; // Return the maximum profit
  }
  
  const prices = [7, 1, 5, 3, 6, 4];
  const profit = maxProfit(prices);
  console.log("Maximum Profit:", profit);
  