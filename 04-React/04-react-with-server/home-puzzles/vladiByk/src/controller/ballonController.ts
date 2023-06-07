import { NextFunction, Response, Request } from "express";
import Ballon from "../model/BallonModel";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomRadius = () => Math.floor(Math.random() * (100 - 50) + 1) + 50;

export const getAllBallons = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ballons = await Ballon.find({});
    res.status(200).json({ ballons });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createBallon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ballon = await Ballon.create({
      color: getRandomColor(),
      radius: randomRadius(),
    });

    res.status(200).json({ ballon });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getBallon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const ballon = await Ballon.findById(id);

    res.status(200).json({ ballon });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteBallon = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const ballon = await Ballon.findByIdAndDelete(id);

    res.status(200).json({ ballon });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("deleted");
    const ballons = await Ballon.deleteMany({});

    res.status(200).json({ ballons });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
