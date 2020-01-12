import { dumpAddress } from './address';
import { IClinic } from '../../../medPlan/src/models';

export const clinic1: IClinic = {
  uid: 'clinic1',
  title: 'Best Clinic in the ld',
  address: dumpAddress,
  doctors: ['doc1', 'doc2'],
  contacts: {
    email: 'haaa@geners.com',
    phone: 123456,
  },
};

export const clinic2: IClinic = {
  uid: 'clinic2',
  title: 'good clinic',
  address: dumpAddress,
  doctors: ['doc1', 'doc2'],
  contacts: {
    email: 'goodl@gene.com',
    phone: 123234456,
  },
};
export const wmemorial: IClinic = {
  uid: 'clinic3',
  title: 'Washington Memorial clinic',
  address: dumpAddress,
  doctors: [],
  contacts: {
    email: 'memorial@geners.com',
    phone: 123456234234,
  },
};

export const clinics = {
  clinic1,
  clinic2,
  clinic3: wmemorial,
};
