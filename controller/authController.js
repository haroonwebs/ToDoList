const joi = require("joi");
const loginschema = joi.object().keys({
  userName: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
});
module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginschema.validateAsync(req.body);
      return res.send({
        message: "login successfully",
        data: validate,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
  logout: (req, res) => {
    try {
      return res.send({
        message: "logout successfullly",
        data: req.body,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
};
