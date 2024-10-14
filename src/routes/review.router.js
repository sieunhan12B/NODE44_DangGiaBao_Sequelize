import express from "express";
import {
  getListReviewByRes,
  postReview,
} from "../controllers/review.controller.js";
import { getListLikeByUser } from "../controllers/reslike.controller.js";

const reviewRoutes = express.Router();

reviewRoutes.post("/add-review", postReview);
reviewRoutes.get(`/get-list-review-by-res/:res_id`, getListReviewByRes);
reviewRoutes.get(`/get-list-review-by-user/:user_id`, getListLikeByUser);

export default reviewRoutes;
