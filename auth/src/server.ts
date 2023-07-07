import { log } from "console";
import express, { Request, Response, Express } from "express";

const app: Express = express();

app.use(express());

app.get("/api/users", (req: Request, res: Response) => {
  res.json("working");
});

app.listen(5000, () => {
  log("Auth service is up and running on port 5000");
});
