import { Request, Response } from 'express';
import { Visit } from './../models/visitModel';

export const createVisit = async (req: Request, res: Response) => {
  const newVisit = new Visit({ ...req.body });
  await newVisit.save();
  res.send(newVisit);
};
