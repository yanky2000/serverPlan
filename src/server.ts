import { Person } from './models/commonSchema';
import { Doctor } from './models/doctorModels';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import { router } from './routes';
// require('dotenv').config();
import { connectDb } from './models';
import { doctors, physician, docs } from './fixtures/doctors';
import { IDoctor } from '../../medPlan/src/models';
import { Clinic } from './models/clinicModel';
import { wmemorial, clinics } from './fixtures/clinics';

const app = express();
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  const re = await Doctor.find();
  console.log('doctors', re);
  if (eraseDatabaseOnSync) {
    Promise.all([Doctor.deleteMany({}), Clinic.deleteMany({})]);
  }

  createDoctors();

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

async function createDoctors() {
  try {
    const clinic = new Clinic(wmemorial);
    await clinic.save()
    
    const ex = new Doctor({...physician, clinics: [clinic.id]});
    await ex.save();
  } catch (err) {
    console.log(err);
  }
}

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
app.use('/', router);
// app.listen(3000, () => console.log('working server!'));
