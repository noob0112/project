const userRouter = require("./user.js");
const authRouter = require("./auth.js");
const postRouter = require("./post.js");
const commentRouter = require("./comment.js");
const courseRouter = require("./course.js");

function route(app) {
  app.use("/user", authRouter);
  app.use("/user", userRouter);
  app.use("/post", postRouter);
  app.use("/comment", commentRouter);
  app.use("/course", courseRouter);
}

module.exports = route;
