import express from "express";
import  { deleteUser} from "../Controller/userController.js";

const user = express.Router();


user.delete("/deleteData",deleteUser);

export default user;
