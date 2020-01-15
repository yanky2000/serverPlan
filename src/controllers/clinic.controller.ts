import { Request, Response } from 'express';
import { Clinic } from '../models/clinicModel';

export const createClinic = async (req: Request, res: Response) => {
  const newClinic = new Clinic({ ...req.body });
  await newClinic.save();
  console.log('added clinic', newClinic);
  res.send(newClinic);
};
