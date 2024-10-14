// - Xử lý like nhà hàng
// - Like
// - Unlike
// - Lấy danh sách like theo nhà hàng và user

import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

// xử lý like nhà hàng =>post like lên table like_res

const likeRes = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    const date_like = new Date();
    console.log({ user_id, res_id, date_like });
    const newLike = await model.like_res.create({
      user_id,
      res_id,
      date_like,
    });
    return res.status(200).json({ message: "success", data: newLike });
  } catch (err) {
    return res.status(400).json({ message: "Fail" });
  }
};

// -Unlike

const deleteLikes = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    console.log({ user_id, res_id });
    const xoaLike = await model.like_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });
    if (!xoaLike) {
      return res.status(404).json({ message: "Không có người like này " });
    }
    return res.status(200).json({ message: "xóa thành công" });
  } catch (err) {
    return res.status(400).json({ message: "Fail" });
  }
};

// - Lấy danh sách like theo nhà hàng

const getListLikeByRes = async (req, res) => {
  try {
    const { resId } = req.params;
    console.log(resId);
    const getLikes = await model.like_res.findAll({
      where: {
        res_id: resId,
      },
      //   include: [
      //     {
      //       model: model.restaurant,
      //       as: "res_id",
      //       // as: "users",
      //       attributes: ["res_id", "res_name"],
      //       required: false,
      //     },
      //   ],
    });
    console.log(getLikes);
    if (!getLikes) {
      return res.status(401).json({ message: "không có id này " });
    }
    return res.status(200).json({ message: "success", data: getLikes });
  } catch (err) {
    return res.status(400).json({ message: "err" });
  }
};

// - Lấy danh sách like theo user

const getListLikeByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log(user_id);
    const getLikes = await model.like_res.findAll({
      where: {
        user_id,
      },
      //   include: [
      //     {
      //       model: model.restaurant,
      //       as: "res_id",
      //       // as: "users",
      //       attributes: ["res_id", "res_name"],
      //       required: false,
      //     },
      //   ],
    });
    console.log(getLikes);
    if (!getLikes) {
      return res.status(401).json({ message: "không có id này " });
    }
    return res.status(200).json({ message: "success", data: getLikes });
  } catch (err) {
    return res.status(400).json({ message: "err" });
  }
};

export { likeRes, deleteLikes, getListLikeByRes, getListLikeByUser };
