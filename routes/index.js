const userRouter = require("./user.js");
const authRouter = require("./auth.js");
const postRouter = require("./post.js");
const commentRouter = require("./comment.js");
const courseRouter = require("./course.js");
const eventRouter = require("./event.js");
const symbolRouter = require("./symbol.js");
const categoryRouter = require("./category.js");
const stockRouter = require("./stock.js");
const predictStockRouter = require("./predictStock.js");
const detailStockRouter = require("./detailStock.js");

function route(app) {
  app.use("/users", authRouter);
  app.use("/users", userRouter);
  app.use("/posts", postRouter);
  app.use("/comments", commentRouter);
  app.use("/courses", courseRouter);
  app.use("/events", eventRouter);
  app.use("/symbols", symbolRouter);
  app.use("/categories", categoryRouter);
  app.use("/stocks", stockRouter);
  app.use("/predict-stocks", predictStockRouter);
  app.use("/detail-stocks", detailStockRouter);
}

module.exports = route;
