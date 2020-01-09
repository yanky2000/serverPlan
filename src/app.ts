import express, { Request, Response } from 'express';
import cors from 'cors';
import { visits, doctors, clinics, User1 } from './tempData';
import uuid from 'uuid/v1';
import fileUpload from 'express-fileupload';
const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.urlencoded());
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.listen(3000, () => console.log('working server!'));

app.get('/', (req: Request, res: Response) => {
  res.send('express is send!');
});

app.get('/visits', (req: Request, res: Response) => {
  res.send(visits);
});
app.post('/newvisit', (req: Request, res: Response) => {
  console.log(req.body);
  const newId = uuid();
  const newVisitWithId = { ...req.body, visitId: newId };
  res.send(newVisitWithId);
});

app.get('/doctors', (req: Request, res: Response) => {
  res.send(doctors);
});
app.get('/adddoctor', (req: Request, res: Response) => {
  console.log('adding doc', req.body);
  res.send(req.body);
});

app.get('/clinics', (req: Request, res: Response) => {
  res.send(clinics);
});
app.get('/addclinic', (req: Request, res: Response) => {
  console.log('adding clinic', req.body);
  res.send(req.body);
});
app.post('/addfile', (req: any, res: Response) => {
  console.log(req.files.file);
  res.send(req.files.file);
});
app.get('/userData', (req: any, res: Response) => {
  res.send(User1);
});
app.post('/adduser', (req: any, res: Response) => {
  console.log('adding user', req.body);
  res.send(req.body);
});
