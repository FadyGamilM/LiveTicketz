import { log } from "console";
import express, { Request, Response, Express } from "express";
import { currentUserRouter } from "./routes/current-user";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";

const app: Express = express();

app.use(express.json());

app.use("/api/users/", loginRouter);
app.use("/api/users/", logoutRouter);
app.use("/api/users/", signupRouter);
app.use("/api/users/", currentUserRouter);
app.use("/api/users", (req, res) => {
  res.send("works");
});

app.use(errorHandler);

app.listen(5000, () => {
  log("Auth service is up and running on port 5000 sucsseffully");
});
