function ensureAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.redirect('/login');
    next();
}

module.exports = ensureAuthenticated;