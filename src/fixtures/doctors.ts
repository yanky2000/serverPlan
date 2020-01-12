import { clinic2, wmemorial, clinic1 } from './clinics';
import { dumpAddress } from './address';
import { IDoctor, IHashMap } from '../../../medPlan/src/models';

export const narcologist: IDoctor = {
  uid: 'doc5',
  firstName: 'Ivan',
  lastName: 'Sidorov',
  specialization: 'narcologist',
  title: 'MD',
  gender: 'Male',
  clinics: ['clinic1'],
};
export const neurologist: IDoctor = {
  uid: 'doc4',
  firstName: 'Maria',
  lastName: 'Johnson',
  specialization: 'neurologist',
  title: 'MD',
  gender: 'Female',
  // contacts: dumpAddress,
  clinics: ['clinic1'],
};
export const psychiatrist: IDoctor = {
  uid: 'doc3',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: 'psychiatrist',
  title: 'MD',
  gender: 'Male',
  clinics: ['clinic1'],
};
export const oculist: IDoctor = {
  uid: 'doc2',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: 'oculist',
  title: 'MD',
  gender: 'Male',
  // contacts: dumpAddress,
  clinics: ['clinic3'],
};

export const physician: IDoctor = {
  uid: 'doc1',
  firstName: 'Александр',
  lastName: 'Крюков',
  specialization: 'physician',
  title: 'MD',
  gender: 'Male',
  // contacts: dumpAddress,
  clinics: [],
};

export const doctors: IHashMap<IDoctor> = {
  doc1: physician,
  doc2: oculist,
  doc3: psychiatrist,
  doc4: neurologist,
  doc5: narcologist,
};
export const docs = [physician, oculist, psychiatrist, neurologist, narcologist]