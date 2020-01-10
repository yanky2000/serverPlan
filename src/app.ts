import { Person } from './models/commonSchema';
import { Doctor } from './models/doctorModels';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import { router } from './routes';
// require('dotenv').config();
import { connectDb } from './models';
import { doctors, physician } from './fixtures/doctors';
import { IDoctor } from '../../medPlan/src/models';

const app = express();
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  const re = await Doctor.find();
  console.log('doctors', re);
  if (eraseDatabaseOnSync) {
    Promise.all([Doctor.deleteMany({}), Person.deleteMany({})]);
  }

  createDoctors();

  const peps = await Person.find();
  console.log('peps', peps);

  const persons = await Person.find();
  console.log('people', persons);

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

async function createDoctors() {
  try {
    // let docs = [];
    // for (const doc of Object.values(doctors)) {
    //   docs.push(new Doctor(doc));
    //   // docs.push(new Person(doc));
    //   docs.forEach(async doc => await doc.save());
    // }
    const ex = new Doctor(physician);
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
