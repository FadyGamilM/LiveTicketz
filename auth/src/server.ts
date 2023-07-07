import { log } from "console";
import express, { Request, Response, Express } from "express";

const app: Express = express();

app.use(express());

app.get("/api/users/current", (req: Request, res: Response) => {
  // res.json({ user: "Fady Gamil" });
  res.send("working");
});

app.listen(5000, () => {
  log("Auth service is up and running on port 5000 sucsseffully");
});
