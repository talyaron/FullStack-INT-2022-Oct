"use strict";
exports.__esModule = true;
exports.isAdmin = void 0;
function isAdmin(req, res, next) {
    try {
        console.log('I should check the user is admin');
        next();
    }
    catch (error) {
        console.error(error);
        res.status(401).send({ error: error.message });
    }
}
exports.isAdmin = isAdmin;
