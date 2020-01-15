import { Doctor } from './../models/doctorModels';

import { Request, Response } from 'express';

export const createDoctor = async (req: Request, res: Response) => {
  const newDoctor = new Doctor({ ...req.body });
  await newDoctor.save();
  console.log('added doc', newDoctor);
  res.send(newDoctor);
};
