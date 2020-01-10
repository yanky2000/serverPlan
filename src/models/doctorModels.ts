import { options, Person } from './commonSchema';
import mongoose from 'mongoose';

// export const doctorSchema = new mongoose.Schema({
//   doctorId: {
//     type: String,
//     unique: true,
//   },
//   firstName: String,
// });

// doctorSchema.statics.findByLogin = async function(login) {
//   let doctor = await this.findOne({
//     username: login,
//   });
//   if (!doctor) {
//     doctor = await this.findOne({ email: login });
//   }
//   return doctor;
// };

// doctorSchema.pre('remove', function(next) {
//   this.model('Message').deleteMany({ doctor: this._id }, next);
// });

export const Doctor = Person.discriminator(
  'Doctor',
  new mongoose.Schema(
    {
      doctorId: {
        type: String,
        required: true,
        unique: true,
      },
      title: String,
      specialization: [String],
      clinicIds: [String],
    },
    options
  )
);
