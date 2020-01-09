import { dumpAddress } from './address';
import { IUser } from '../../../medPlan/src/models';

export const User1: IUser = {
  userId: 'user1',
  firstName: 'Ivan',
  lastName: 'Petrov',
  login: 'Petrov1',
  gender: 'Male',
  password: '1234',
  contacts: dumpAddress,
};
