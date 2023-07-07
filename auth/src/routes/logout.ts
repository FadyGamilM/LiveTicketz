import { log } from "console";
import { Router, Request, Response } from "express";
import { body, validationResult, Result } from "express-validator";
const logoutRouter: Router = Router();

logoutRouter.post("/logout", (req: Request, res: Response) => {
  res.status(200).send("logged out");
});

export { logoutRouter };
