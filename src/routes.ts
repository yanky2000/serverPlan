import { Doctor } from './models/doctorModels';
import { User1 } from './fixtures/users';
import { clinics } from './fixtures/clinics';
import { doctors } from './fixtures/doctors';
import express, { Request } from 'express';
import { Response } from 'express-serve-static-core';
import { visits } from './fixtures/visits';
import uuid from 'uuid/v1';

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('express is send!');
});

router.get('/visits', (req: Request, res: Response) => {
  res.send(visits);
});
router.post('/newvisit', (req: Request, res: Response) => {
  console.log(req.body);
  const newId = uuid();
  const newVisitWithId = { ...req.body, visitId: newId };
  res.send(newVisitWithId);
});

router.get('/doctors', async (req: Request, res: Response) => {
  const ex = await Doctor.find();
  console.log('findings', ex);
  res.send(ex);
});
router.get('/adddoctor', (req: Request, res: Response) => {
  console.log('adding doc', req.body);
  res.send(req.body);
});

router.get('/clinics', (req: Request, res: Response) => {
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
