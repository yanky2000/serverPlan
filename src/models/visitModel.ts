import { VISIT } from '../constants';
import mongoose, { Schema } from 'mongoose';
import { DOCTOR, CLINIC, RESULT, USER } from '../constants';
import { options } from './commonSchema';

export const VisitSchema = new Schema(
  {
    title: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: USER },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: DOCTOR },
    date: Date,
    time: String,
    clinic: { type: mongoose.Schema.Types.ObjectId, ref: CLINIC },
    comments: String,
    results: [{ type: mongoose.Schema.Types.ObjectId, ref: RESULT }],
  },
  options
);

export const Visit = mongoose.model(VISIT, VisitSchema);
