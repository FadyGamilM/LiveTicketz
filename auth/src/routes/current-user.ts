import { log } from "console";
import { Router, Request, Response } from "express";
import { body, validationResult, Result } from "express-validator";
const currentUserRouter: Router = Router();

currentUserRouter.get("/current", (req: Request, res: Response) => {
  res.status(200).send("no body");
});

export { currentUserRouter };
