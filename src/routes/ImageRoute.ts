import { Request, Response, NextFunction, Router } from "express";
import Image from "../models/Image";
import { query, validationResult } from "express-validator";
import path from "path";

const router = Router();

router.get(
  "/",
  [
    query("filename").notEmpty().isString(),
    query("width").notEmpty().isNumeric(),
    query("height").notEmpty().isNumeric(),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const img = new Image(
        req.query.filename as string,
        Number(req.query.width),
        Number(req.query.height)
      );

      const outfile = await img.resize();

      res.sendFile(path.resolve(outfile));
    } catch (error) {
      next(error);
    }
  }
);
export default router;
