import { VISIT, RESULT } from './../constants';
import { Person, options, ContactsSchema } from './commonSchema';
import { Schema } from 'mongoose';
import { USER } from '../constants';

const userSchema = new Schema(
  {
    login: {
      type: String,
      unique: true,
      // required: true,
    },
    password: String,
    // userData?: any;
    visits: [{ type: Schema.Types.ObjectId, ref: VISIT }],
    // results: [{ type: Schema.Types.ObjectId, ref: RESULT }],
  },
  options
);

// userSchema.pre('remove', function(next) {
//   this.model(VISIT).deleteMany({ user: this._id }, next);
// });

export const User = Person.discriminator(USER, userSchema);
