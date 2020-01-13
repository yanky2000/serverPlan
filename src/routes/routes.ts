import { Clinic } from '../models/clinicModel';
import { Visit } from '../models/visitModel';
import { Doctor } from '../models/doctorModels';
import { User1 } from '../fixtures/users';
import express, { Request } from 'express';
import { Response } from 'express-serve-static-core';
// import { visits } from './fixtures/visits';
import uuid from 'uuid/v1';

export const router = express.Router();

router.get('/home', (req: Request, res: Response) => {
  res.send('express is send!');
});

router.get('/visits', async (req: Request, res: Response) => {
  const visits = await Visit.find();
  console.log('visits', visits);
  res.send(visits);
});
router.post('/newvisit', (req: Request, res: Response) => {
  console.log(req.body);
  const newId = uuid();
  const newVisitWithId = { ...req.body, visitId: newId };
  res.send(newVisitWithId);
});

router.get('/doctors', async (req: Request, res: Response) => {
  const doctors = await Doctor.find();
  console.log('findings', doctors);
  res.send(doctors);
});
router.get('/adddoctor', (req: Request, res: Response) => {
  console.log('adding doc', req.body);
  res.send(req.body);
});

router.get('/clinics', async (req: Request, res: Response) => {
  const clinics = await Clinic.find();
  res.send(clinics);
});
router.get('/addclinic', (req: Request, res: Response) => {
  console.log('adding clinic', req.body);
  res.send(req.body);
});
router.post('/addfile', (req: any, res: Response) => {
  console.log(req.files.file);
  res.send(req.files.file);
});
router.get('/userData', (req: any, res: Response) => {
  res.send(User1);
});
router.post('/adduser', (req: any, res: Response) => {
  console.log('adding user', req.body);
  res.send(req.body);
});