const jwt = require('jsonwebtoken');

 const genneralAccessToken = (payload) =>{
    const access_token = jwt.sign({
        payload
    }, 'access_token', { expiresIn: '1h'})

    return access_token
}

 const genneralRefeshToken = (payload) =>{
    const refresh_token = jwt.sign({
        payload
    }, 'refresh_token', { expiresIn: '1d'})

    return refresh_token
}

module.exports = {
    genneralAccessToken,genneralRefeshToken
}
