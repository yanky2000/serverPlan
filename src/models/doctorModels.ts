import mongoose from 'mongoose';
import { options, Person } from './commonSchema';
import { CLINIC } from '../constants';

export const Doctor = Person.discriminator(
  'Doctor',
  new mongoose.Schema(
    {
      title: String,
      specialization: String, // TODO: Change to ids?
      clinics: [{ type: mongoose.Schema.Types.ObjectId, ref: CLINIC }],
    },
    options
  )
);
