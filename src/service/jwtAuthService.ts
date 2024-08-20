import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
interface MyUserRequest extends Request {
    headers: any;
    data?: any;
  }
const verifyJwt = (req: MyUserRequest, res: Response, next: NextFunction) => {
    const authHeader: any = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).send({ status: false, message: "Token required" })
    }
    jsonwebtoken.verify(token, "secretKey", (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.data=user;
        next();
})
}
export { verifyJwt };