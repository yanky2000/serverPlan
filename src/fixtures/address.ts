import { IContact, IAddress } from '../../../medPlan/src/models';
import { getMaxListeners } from 'cluster';

export const dumpAddress: IContact = {
  address: {
    country: 'Russia',
    city: 'Moscow',
    zipCode: 123456,
    street: 'Pokrovka 21-14',
  },
  email: 'haaa@geners.com',
  phone: 123456,
};
