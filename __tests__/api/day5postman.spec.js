const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Day 05", () => {
    it("Gets the rate of chosen currency", () => {
      var currency = 'usd';
      return frisby.get('https://api.coindesk.com/v1/bpi/currentprice/' + currency + '.json')
        .expect("status", 200)
        .then((result) => {
          const body = result.json;
          console.log(result.time);
        });
    });
});
