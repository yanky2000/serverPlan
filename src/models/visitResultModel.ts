import mongoose, { Schema } from 'mongoose';
import { VISIT, MEDICATION, RESULT } from '../constants';
import { options } from './commonSchema';

export const ResultSchema = new Schema(
  {
    // visit: { type: mongoose.Schema.Types.ObjectId, ref: VISIT },
    diagnosis: String,
    prescriptions: String,
    // prescriptedMedications: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: MEDICATION },
    // ],
    // followUpVisitDate: Date,
    // files: Buffer,
  },
  options
);
export const Result = mongoose.model(RESULT, ResultSchema);
