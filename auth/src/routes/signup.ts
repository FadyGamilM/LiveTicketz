import { log } from "console";
import { Router, Request, Response } from "express";
import { body, validationResult, Result } from "express-validator";
const signupRouter: Router = Router();

signupRouter.post("/signup", (req: Request, res: Response) => {
  res.status(200).send("now signin !");
});

export { signupRouter };
