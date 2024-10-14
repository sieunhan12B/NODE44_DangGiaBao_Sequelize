import express from "express";
import {
  deleteLikes,
  getListLikeByRes,
  getListLikeByUser,
  likeRes,
} from "./../controllers/reslike.controller.js";

const likeResRoutes = express.Router();

likeResRoutes.post("/like", likeRes);
likeResRoutes.delete("/unlike", deleteLikes);
likeResRoutes.get(`/danh-sach-like-theo-nha-hang/:resId`, getListLikeByRes);
likeResRoutes.get(`/danh-sach-like-theo-user/:user_id`, getListLikeByUser);
likeResRoutes.get(
  `/danh-sach-like-theo-user/:user_id/:res_id`,
  getListLikeByUser
);

export default likeResRoutes;
