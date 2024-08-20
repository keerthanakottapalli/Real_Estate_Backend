import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { generatePassword, sendUserCredentials } from "../service/userService";

const createUser = async (req: Request, res: Response) => {
    try {
        const password=generatePassword();
        let user = new userModel({...req.body, password});
        user.save().then(() => {
            res.send({ message: "User Added Successfully", success: true });
            sendUserCredentials(user);
        }).catch(error =>
            res.status(400).send(error)
        )
    }
    catch (error) {
        res.status(500).send(error);
    }
}
const getUsers = async (req: Request, res: Response) => {
    let data = await userModel.find()
    res.send(data)
}

export {createUser, getUsers}