import express from "express";
import {createUser, getUsers} from "../controller/userController";

const userRoutes = express.Router();
userRoutes.get('/', getUsers);
userRoutes.post('/create', createUser);


export default userRoutes;