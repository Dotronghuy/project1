const User = require('../models/user');
const userServiecs = require('../serviecs/UserServiecs')
const bcrypt = require('bcrypt');
const Products = require('../models/products');


const createUser = async (req, res) => {
    try {
        const { userKey, password } = req.body;
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const isCheckEmail = re.test(userKey);
        if (!userKey) {
            return res.status(400).json({
                status: 'error',
                message: 'User key is required'
            })
        } else if (!isCheckEmail) {
            return res.status(400).json({
                status: 'error',
                message: 'User key must be a valid email address'
            })
        }

        const register = await userServiecs.createUser(req.body);
        if (register.status === 'success') {
            return res.redirect('/login');
        } else {
            return res.status(400).json({
                status: 'error',
                message: register.message
            });
        }
    } catch (e) {
        return res.status(400).json({
            message: e
        })
    }

}

// const loginUser = async (req, res) => {
//     try{
//         const { userKey, password} = req.body;
//         const re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         const isCheckEmail = re.test(userKey);
//         if(!userKey){
//             return res.status(400).json({
//                 status: 'error',
//                 message: 'User key is required'
//             })
//         }else if(!isCheckEmail){
//             return res.status(400).json({
//                 status: 'error',
//                 message: 'User key must be a valid email address'
//             })
//         }

//         const register = await userServiecs.loginUser(req.body);
//         return res.status(200).json(register);

//     }catch(e){
//         return res.status(400).json({
//             message: e
//         })
//     }
// }

const login = async (req, res) => {
    const { userKey, password } = req.body;
    console.log(userKey, password);
    try {
        const user = await User.findOne({ userKey: userKey });
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        const isPassword = bcrypt.compareSync(password, user.password);
        console.log("!2345")
        console.log(isPassword);
        if (isPassword) {
            const username = userKey.split('@')[0];

            req.session.user = username;

            const products = await Products.find();
            console.log(products);
            res.render("home", { layout: "main", products: products, userKey: req.session.user, notificationMessage: "Chức năng chưa hoàn thiện", handleNoneShoppe: "" });

        } else {
            res.status(400).send('password or username incorrect')
        }
    } catch (e) {
        res.status(500).send('Username or password is incorrect');
    }

}

module.exports = { createUser, login };
