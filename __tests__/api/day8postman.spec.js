const frisby = require("frisby");
const Joi = frisby.Joi;
describe("postman", () => {
    it("day 8", () => {
      return frisby.get("https://randomuser.me/api?gender=female&nat=fr")
        .expect("status", 200)
        .then((result) => {
          const body = (result.json).results[0];
          expect(body.nat).toBe("FR")
          expect(body.gender).toBe('female')
          console.log(body.name)
    });
    });
    });