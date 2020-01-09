import { IContact } from '../../../medPlan/src/models';

export const dumpAddress: IContact = {
  email: 'some@mail.ru',
  phone: 1234,
  address: {
    country: 'Russia',
    city: 'Moscow',
    zipCode: 123456,
    street: 'Pokrovka 21-14',
  },
};
