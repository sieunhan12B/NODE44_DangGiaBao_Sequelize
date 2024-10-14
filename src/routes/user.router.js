import express from "express";
import { order } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/order", order);

export default userRoutes;
