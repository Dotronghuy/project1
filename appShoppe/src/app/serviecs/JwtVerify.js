const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = "your_access_token_secret";
const REFRESH_TOKEN_SECRET = "your_refresh_token_secret";

const jwtVerifyAccessToken = (token) => {
    try {
        return jwt.verify(token, ACCESS_TOKEN_SECRET);
    } catch (e) {
        return "";
    }
};

const jwtVerifyRefreshToken = (token) => {
    try {
        return jwt.verify(token, REFRESH_TOKEN_SECRET);
    } catch (e) {
        return "";
    }
};

module.exports = {
    jwtVerifyAccessToken,
    jwtVerifyRefreshToken,
};
