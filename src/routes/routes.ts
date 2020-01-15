import express, { Request, Response } from 'express';
import { User } from './../models/userModel';
import { Clinic } from '../models/clinicModel';
import { Visit } from '../models/visitModel';
import { Doctor } from '../models/doctorModels';
import { createVisit } from '../controllers/visit.controller';
import { createDoctor } from '../controllers/doctor.controller';
import { createClinic } from '../controllers/clinic.controller';

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('express is send!');
});

router.get('/visits', async (req: Request, res: Response) => {
  const visits = await Visit.find();
  res.send(visits);
});
router.post('/newvisit', createVisit);

router.get('/doctors', async (req: Request, res: Response) => {
  const doctors = await Doctor.find();
  res.send(doctors);
});

router.post('/adddoctor', createDoctor);

router.get('/clinics', async (req: Request, res: Response) => {
  const clinics = await Clinic.find();
  res.send(clinics);
});

router.post('/addclinic', createClinic);

router.post('/addfile', (req: any, res: Response) => {
  console.log(req.files.file);
  res.send(req.files.file);
});
router.get('/userData', async (req: any, res: Response) => {
  const user = await User.find();
  res.send(user);
});
router.post('/adduser', (req: any, res: Response) => {
  console.log('adding user', req.body);
  res.send(req.body);
});
