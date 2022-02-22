

// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12
// Here are some more examples with positive profit:

// best([1, 2, 3, 4, 5])
// // 4 - buy at $1, sell at $5

// best([2, 3, 10, 6, 4, 8, 1])
// // 8 - buy at $2, sell at $10

// best([7, 9, 5, 6, 3, 2])
// // 2 - buy at $7, sell at $9

// best([0, 100])
// // 100 - buy at $0, sell at $100

const best = (prices) => {
  let maxDiff = 0;
  let lowSoFar;

  for (let i = 0; i < prices.length; i++) {
    if (lowSoFar === undefined || prices[i] < lowSoFar) {
      lowSoFar = prices[i];
    }

    let diff = prices[i] - lowSoFar;

    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;

// best([2, 3, 10, 6, 4, 8, 1])
// best([5, 4 , 3, 2, 1])

// function best(arr) {
//   let profit = [];
//   for (let i = 0; i < arr.length; i++) {
//     let currentProfit = 0;
//     for (let x = i + 1; x < arr.length; x++) {
//       if (arr[x] - arr[i] > currentProfit) {
//         currentProfit = arr[x] - arr[i];
//       }
//       profit.push(currentProfit);
//     }
//   }
//   let largestProfit = profit[0];
//   for (let y = 1; y < profit.length; y++) {
//     if (profit[y] > largestProfit) {
//       largestProfit = profit[y];
//     }
//   }
//   return largestProfit;
// }
// console.log(best([5, 4, 3, 2, 1]));

// function best(arr){

//   let bestValuesArray = [];
//   for (let i = 0; i < arr.length - 1; i++){
//     let bestValue = {value:0, firstIndex:0, secondIndex: 0};
//     for (let j = i+1; j < arr.length; j++){
//       if (arr[j] - arr[i] > bestValue.value){
//         bestValue.value = arr[j] - arr[i];
//         bestValue.firstIndex = i;
//         bestValue.secondIndex = j;
//       }
//     }
//       bestValuesArray.push(bestValue);
//   }

//   let bestObject = bestValuesArray[0];
//   for (let i = 0; i < bestValuesArray.length; i++){
//     if (bestObject.value < bestValuesArray[i].value){
//       bestObject = bestValuesArray[i];
//     }
//   }
//   if (bestObject.value > 0){
//       return `Best Price: $${bestObject.value}. Buy at $${arr[bestObject.firstIndex]} and sell at $${arr[bestObject.secondIndex]}.`;
//   }
//   else{
//     return 0;
//   }
