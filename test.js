// require syntax (if your code base does not support imports)
const yahooFinance = require('yahoo-finance2').default; // NOTE the .default

// const results = yahooFinance.search('AAPL').then((data) => {
//     console.log(data);
// });
// const results = await yahooFinance.search('AAPL', { someOption: true, etc });
// console.log(results);

const quote = yahooFinance.quote('RELIANCE.NS').then((quote) => {
    // console.log(quote);
    const { regularMarketPrice: price, currency } = quote;
    console.log(price, currency);
});