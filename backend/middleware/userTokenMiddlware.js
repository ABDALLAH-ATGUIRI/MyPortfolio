const JWT = require("jsonwebtoken");
const UserTokenMiddleware = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      JWT.verify(token, process.env.USER_TOKEN_PASS, (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: "Invalid token",
            data: token
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied! unautorized user"
      });
    }
  }
};

module.exports = { UserTokenMiddleware };
