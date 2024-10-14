import express from "express";
import likeResRoutes from "./likeres.router.js";
import reviewRoutes from "./review.router.js";
import userRoutes from "./user.router.js";

// tạo object router tổng
const rootRoutes = express.Router();

rootRoutes.use("/like-res", likeResRoutes);
rootRoutes.use("/review", reviewRoutes);
rootRoutes.use("/user", userRoutes);

// export rootRoutes cho index.js dùng
export default rootRoutes;
