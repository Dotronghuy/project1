const User = require('../models/user');
const bcrypt = require('bcrypt');
const { genneralAccessToken, genneralRefeshToken } = require('./JwtServiecs');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { userKey, password } = newUser;
        try {
            const checkUserKey = await User.findOne({
                userKey: userKey
            })
            if (checkUserKey !== null) {
                resolve({
                    status: 'success',
                    message: 'Tài khoản đã tồn tại',
                    data: checkUserKey
                })
            }
            const hash = bcrypt.hashSync(password, 10);
            const newUserRegister = new User({ userKey, password: hash });
            newUserRegister.save()
                .then(() => {
                    resolve({
                        status: 'success',
                        message: 'Tài khoản đã thành công lập',
                        data: checkUserKey
                    })
                })
        } catch (e) {
            reject(e);
        }
    })
}


module.exports = { createUser }