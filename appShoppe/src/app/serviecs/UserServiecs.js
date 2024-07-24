const User = require('../models/user');
const bcrypt = require('bcrypt');
const { genneralAccessToken, genneralRefeshToken } = require('./JwtServiecs');

const createUser = (newUser) => {   
    return new Promise( async (resolve, reject) => {
        const { userKey, password} = newUser;
        try{
            const checkUserKey = await User.findOne({
                userKey: userKey
            })
            if(checkUserKey !== null ){
                resolve({
                    status: 'success',
                    message: 'Tài khoản đã tồn tại',
                    data: checkUserKey
                })
            }
            const hash = bcrypt.hashSync(password, 10);
            const newUserRegister = new User({userKey, password: hash});
            newUserRegister.save()
            .then(()=>{
                resolve({
                    status: 'success',
                    message: 'Tài khoản đã thành công lập',
                    data: checkUserKey
                })
            })
        }catch(e){
            reject(e);
        }
    })
}
// const loginUser = (loginUser) => {
//     return new Promise( async (resolve, reject) => {
//         const { userKey, password} = loginUser;
//         try{
//             const checkUserKey = await User.findOne({
//                 userKey: userKey
//             })
//             if(checkUserKey === null ){
//                 resolve({
//                     status: 'error',
//                     message: 'Tài khoản không tồn tại',
//                     data: checkUserKey
//                 })
//             }
//             const comparePassword = await bcrypt.compareSync(password, checkUserKey.password);
//             if(!comparePassword){
//                 resolve({
//                     status: 'error',
//                     message: 'Email or password is not defnied',
//                 })
//             }else{
//                 req.render('home')
//             }
//             const access_token = await genneralAccessToken({
//                 id: checkUserKey._id,
//                 isAdmin: checkUserKey.isAdmin
//             })
//             const refresh_token = await genneralRefeshToken({
//                 id: checkUserKey._id,
//                 isAdmin: checkUserKey.isAdmin
//             })
//             resolve({
//                 status:'success',
//                 message: 'Đăng nhập thành công',
//                 access_token,
//                 refresh_token
//             })
//         }catch(e){
//             reject(e);
//         }
//     })
// }

module.exports = { createUser }