import mongoose, { Schema } from 'mongoose';
import { PATIENT, DOCTOR, CLINIC, RESULT, USER } from '../constants';

export const Visit: Schema = new Schema({
  title: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: USER },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: DOCTOR },
  date: Date,
  time: String,
  clinic: { type: mongoose.Schema.Types.ObjectId, ref: CLINIC },
  comments: String,
  results: { type: mongoose.Schema.Types.ObjectId, ref: RESULT },
});
