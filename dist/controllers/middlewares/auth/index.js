"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
exports.authorize = (req, res, next) => {
    // tslint:disable-next-line:no-console
    console.log('DOING SOME AUTH WORK');
    // tslint:disable-next-line:no-console
    console.log('Bearer ' + req.headers.authorization);
    const bearerHeader = req.headers.authorization;
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        const userId = bearerToken;
        req.userId = userId;
        next();
    }
    else {
        // Forbidden
        res.sendStatus(401);
    }
    next();
};
//# sourceMappingURL=index.js.map