// middleware/loginMiddleware.js
const fs = require('fs');
const path = require('path');

// Đường dẫn tới file log
const logFilePath = path.join(__dirname, '../controllers/login_logs.txt');

const logLogin = (req, res, next) => {
    const userKey = req.body.userKey; // Lấy thông tin từ body request
    const logEntry = `${new Date().toISOString()} - Attempted login by ${userKey}\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Failed to log login attempt:', err);
        }
        next();
    });
};

module.exports = logLogin;
