import { clinic2, wmemorial, clinic1 } from './clinics';
import { dumpAddress } from './address';
import { IDoctor, IHashMap } from '../../../medPlan/src/models';

export const narcologist: IDoctor = {
  doctorId: 'doc5',
  firstName: 'Ivan',
  lastName: 'Sidorov',
  specialization: ['narcologist'],
  title: 'MD',
  gender: 'Male',
  contacts: dumpAddress,
  clinic: wmemorial,
};
export const neurologist: IDoctor = {
  doctorId: 'doc4',
  firstName: 'Maria',
  lastName: 'Johnson',
  specialization: ['neurologist'],
  title: 'MD',
  gender: 'Female',
  some: 23,
  contacts: dumpAddress,
  clinic: clinic1,
};
export const psychiatrist: IDoctor = {
  doctorId: 'doc3',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: ['psychiatrist'],
  title: 'MD',
  gender: 'Male',
  contacts: dumpAddress,
  clinic: clinic2,
};
export const oculist: IDoctor = {
  doctorId: 'doc2',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: ['oculist'],
  title: 'MD',
  gender: 'Male',
  contacts: dumpAddress,
  clinic: wmemorial,
};

export const physician: IDoctor = {
  doctorId: 'doc1',
  firstName: 'Александр',
  lastName: 'Крюков',
  specialization: ['physician'],
  title: 'MD',
  gender: 'Male',
  age: 35,
  contacts: dumpAddress,
  clinic: clinic2,
};

export const doctors: IHashMap<IDoctor> = {
  doc1: physician,
  doc2: oculist,
  doc3: psychiatrist,
  doc4: neurologist,
  doc5: narcologist,
};
