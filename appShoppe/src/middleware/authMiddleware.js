// middleware/loginMiddleware.js
const fs = require('fs');
const path = require('path');
const User = require('../app/models/user');

// Đường dẫn tới file log
const logFilePath = path.join(__dirname, '../controllers/login_logs.txt');

const logLogin = async (req, res, next) => {
    const userKey = req.body.userKey;
    const logEntry = `${new Date().toISOString()} - Attempted login by ${userKey}\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Failed to log login attempt:', err);
        }
    });
    try {
        const user = await User.findOne({ userKey: userKey });
        if (user && user.isAdmin) {
            console.log(`Admin ${userKey} is trying to log in.`)
        } else {
            console.log(`User ${userKey} is trying to log in.`)
        }
    } catch (err) {
        console.log('error');
    }


    next();
};

module.exports = logLogin;
