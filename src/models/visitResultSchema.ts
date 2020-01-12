import mongoose, { Schema } from 'mongoose';
import { VISIT, MEDICATION } from 'src/constants';

export const VisitResults = new Schema({
  visit: { type: mongoose.Schema.Types.ObjectId, ref: VISIT },
  diagnosis: String,
  prescriptions: String,
  prescriptedMedications: [
    { type: mongoose.Schema.Types.ObjectId, ref: MEDICATION },
  ],
  followUpVisitDate: Date,
  files: Buffer,
});
