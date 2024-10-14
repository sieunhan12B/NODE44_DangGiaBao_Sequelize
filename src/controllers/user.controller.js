import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

// - Order món

const order = async (req, res) => {
  try {
    const { user_id, food_id, amount, discount_code } = req.body;
    // console.log(data);
    const addFood = await model.orders.create({
      user_id,
      food_id,
      amount,
      discount_code,
    });

    res.status(200).json({ message: "success", data: addFood });
  } catch (err) {
    res.status(400).json({ message: "err" });
  }
};
export { order };
