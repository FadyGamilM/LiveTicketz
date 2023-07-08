import { log } from "console";
import { Router, Request, Response, NextFunction } from "express";
import { body, validationResult, Result } from "express-validator";
const loginRouter: Router = Router();

loginRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email must be provided and valid"),
    // request validation middleware
    body("password")
      .trim()
      .isLength({ max: 20, min: 8 })
      .withMessage(
        "Password must be provided, valid, and between 8 to 20 character"
      ),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    // extract info from request body
    let { email, password } = req.body;

    // check if there are any validation errors
    let validationErrors: Result = validationResult(req);

    if (!validationErrors.isEmpty())
      throw new Error("Invalid email or password");

    // chekc if the type of email is not a string
    if (typeof email !== "string") throw new Error("Invalid email");
  }
);

export { loginRouter };
