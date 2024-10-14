// - Xử lý đánh giá nhà hàng
// - Thêm đánh giá
// - Lấy danh sách đánh theo  nhà hàng và user

import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

// - Thêm đánh giá

const postReview = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    let date_rate = new Date();
    const addRate = await model.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate,
    });

    res.status(200).json({ message: "success", data: addRate });
  } catch (err) {
    res.status(400).json({ message: "err" });
  }
};

// - Lấy danh sách đánh theo  nhà hàng

const getListReviewByRes = async (req, res) => {
  try {
    const { res_id } = req.params;
    const listReviews = await model.rate_res.findAll({
      where: {
        res_id,
      },
    });
    if (!listReviews) {
      res.status(401).json({ message: "Không tồn tại id này" });
    }
    res.status(200).json({ message: "success", data: listReviews });
  } catch (err) {
    res.status(400).json({ message: "err" });
  }
};

// - Lấy danh sách đánh theo  user

const getListReviewByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const listReviews = await model.rate_res.findAll({
      where: {
        user_id,
      },
    });
    if (!listReviews) {
      res.status(401).json({ message: "Không tồn tại id này" });
    }
    res.status(200).json({ message: "success", data: listReviews });
  } catch (err) {
    res.status(400).json({ message: "err" });
  }
};

export { postReview, getListReviewByRes, getListReviewByUser };
