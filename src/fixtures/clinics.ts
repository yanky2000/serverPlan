import {
  narcologist,
  neurologist,
  psychiatrist,
  oculist,
  physician,
} from './doctors';
import { dumpAddress } from './address';
import { IClinic } from '../../../medPlan/src/models';

export const clinic1: IClinic = {
  clinicId: 'clinic1',
  title: 'Best Clinic in the ld',
  contacts: dumpAddress,
  doctors: [narcologist, neurologist],
};

export const clinic2: IClinic = {
  clinicId: 'clinic2',
  title: 'good clinic',
  contacts: {
    ...dumpAddress,
    address: dumpAddress.address,
  },
  doctors: [psychiatrist, physician],
};
export const wmemorial: IClinic = {
  clinicId: 'clinic3',
  title: 'Washington Memorial clinic',
  contacts: {
    email: 'aomw@do.com',
    phone: 12341234,
    // address: { ...dumpAddress.address, city: 'Washington DC', street: "Loughboro Rd NW" },
  },
  doctors: [oculist],
};

export const clinics = {
  clinic1,
  clinic2,
  clinic3: wmemorial,
};
