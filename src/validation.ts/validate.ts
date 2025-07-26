import { ZodSchema,} from "zod";
import { Request, Response, NextFunction } from "express";
export const validation =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(401).json({
        success: false,
        message: "Bad request",
        data: {},
        errors: result.error.format(),
      });
    }

    next()
  };
