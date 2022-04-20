import "colorts/lib/string";
import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(
        `[${new Date().toISOString()}] - ${req.method} ${req.url} ${
            res.statusCode
        } `
    );
    next();
};

module.exports = logger;
