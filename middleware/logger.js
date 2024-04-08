"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}
exports.default = logger;
