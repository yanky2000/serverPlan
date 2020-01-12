import { dumpAddress } from './address';
import { IUser } from '../../../medPlan/src/models';

export const User1: IUser = {
  userId: 'user1',
  firstName: 'Ivan',
  lastName: 'Petrov',
  login: 'Petrov1',
  password: '1234',
  gender: 'Male',
  contacts: {
    email: 'goodemail@mail.ru',
    phone: 79159134134,
  },
};
