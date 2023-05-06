import { NextFunction, Response, Request } from "express";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const setBoardCookie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!secret) throw new Error("Missing jwt secret");

    const { id: boardId } = req.params;
    const token = jwt.encode({ boardId, role: "public" }, secret);

    if (!token) throw new Error("Missing token...");

    res.cookie("board", token, {
      maxAge: 60 * 60 * 1000, //1 hour
      httpOnly: true,
    });

    res.end();
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
