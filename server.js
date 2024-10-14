// Chạy backend
// import thư viện
import express from "express";
import rootRoutes from "./src/routes/root.router.js";
import cors from "cors";

// tạo đối tượng
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("CHao dang gia bao ");
});

app.use(rootRoutes);

// define port để BE chạy
app.listen(8081, () => {
  console.log("Sever online with port 8081");
});
