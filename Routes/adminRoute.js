import express from "express";
import addAdmin from "../Controller/adminController.js";

const admin = express.Router();

admin.post("/addAdmin",addAdmin);

export default admin;