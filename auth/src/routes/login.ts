import { log } from "console";
import { Router, Request, Response } from "express";
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
  (req: Request, res: Response) => {
    // extract info from request body
    let { email, password } = req.body;

    // check if there are any validation errors
    let validationErrors: Result = validationResult(req);
    log(validationErrors);
    if (!validationErrors.isEmpty())
      return res.status(400).send(validationErrors.array());

    // chekc if the type of email is not a string
    if (typeof email !== "string")
      return res.status(400).send("please provide a valid email");
  }
);

export { loginRouter };
