const frisby = require("frisby");
const Joi = frisby.Joi;
describe("postman", () => {
    it('day 6', () => {
     return frisby
        .get('https://api.chucknorris.io/jokes/random')
        .expect('status', 200)
        .expect("json", "icon_url", "https://assets.chucknorris.host/img/avatar/chuck-norris.png")
        .expect("json", "created_at", "2020-01-05 13:42:29.296379")
        .expect("json","id", "1E1go-APTEqKG9WgbsV-xg")
        .expect("json", "updated_at", "2020-01-05 13:42:25.628594")
        .expect("json", "url", "https://api.chucknorris.io/jokes/1E1go-APTEqKG9WgbsV-xg")
        .expect("jsonTypes", "items.*", {
            icon_url: Joi.string().uri(),
            created_at: Joi.number(),
            id: Joi.string(),
            updated_at: Joi.number(),
            url: Joi.string().uri(),
            value: Joi.string(),
})
.then((result) => {
    console.log(result.json);
    })
});
});
