const User = require('../models/user');
const userServiecs = require('../serviecs/UserServiecs')
const bcrypt = require('bcrypt');
const Products = require('../models/products');
const jwt = require('jsonwebtoken');
const jwtVerify = require('../../app/serviecs/JwtVerify');
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'login_logs.txt');

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



const login = async (req, res) => {
    const { userKey, password } = req.body;
    console.log(userKey, password);
    try {
        const user = await User.findOne({ userKey: userKey });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        const isPassword = bcrypt.compareSync(password, user.password);
        if (isPassword) {
            const username = userKey.split('@')[0];

            req.session.user = username;
            const logEntry = `${new Date().toISOString()} - User ${username} logged in\n`;
            fs.appendFile(logFilePath, logEntry, (err) => {
                if (err) {
                    console.error('Failed to log login:', err);
                }
            });

            res.redirect('/');
        } else {
            res.status(400).send('password or username incorrect')
        }
    } catch (e) {
        res.status(500).send('Username or password is incorrect');
    }

}
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error destroying session');
        }
        res.redirect('/');
    });
}

module.exports = { createUser, login, logout };
