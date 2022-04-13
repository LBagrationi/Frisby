const frisby = require("frisby");
const Joi = frisby.Joi;
describe("postman", () => {
    it('day 1', () => {
      return frisby
      .post("https://postman-echo.com/post", {payload: "hello world!"})
        .expect("status", 200)
        .expect("json", "data", {payload: "hello world!"})
        .expect("jsonTypes", "headers", {
          'x-forwarded-proto': Joi.string().required(),
          "host": Joi.string().required(),
          "content-length": Joi.number().required(),
          'content-type': 'application/json'
          })
    });
    });