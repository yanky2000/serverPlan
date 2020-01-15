import { IDoctor, INoId } from '../../../medPlan/src/types/models';

export const narcologist: INoId<IDoctor> = {
  // _id: 'doc5',
  firstName: 'Ivan',
  lastName: 'Sidorov',
  specialization: 'narcologist',
  fullName: 'Александр Крюковский',
  title: 'MD',
  gender: 'Male',
  clinics: ['clinic1'],
};
export const neurologist: INoId<IDoctor> = {
  // _id: 'doc4',
  firstName: 'Maria',
  lastName: 'Johnson',
  specialization: 'neurologist',
  fullName: 'Александр Крюковский',
  title: 'MD',
  gender: 'Female',
  // contacts: dumpAddress,
  clinics: ['clinic1'],
};
export const psychiatrist: INoId<IDoctor> = {
  // _id: 'doc3',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: 'psychiatrist',
  fullName: 'Александр Крюковский',
  title: 'MD',
  gender: 'Male',
  clinics: ['clinic1'],
};
export const oculist: INoId<IDoctor> = {
  // _id: 'doc2',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: 'oculist',
  fullName: 'Александр Крюковский',
  title: 'MD',
  gender: 'Male',
  // contacts: dumpAddress,
  clinics: ['clinic3'],
};

// export const physician: IDoctor = {
export const physician: INoId<IDoctor> = {
  firstName: 'Александр',
  lastName: 'Крюковский',
  fullName: 'Александр Крюковский',
  specialization: 'physician',
  title: 'MD',
  gender: 'Male',
  contacts: { phone: 12345 },
  clinics: [],
};

// export const doctors: IHashMap<IDoctor> = {
//   // doc1: physician,
//   doc2: oculist,
//   doc3: psychiatrist,
//   doc4: neurologist,
//   doc5: narcologist,
// };
export const docs = [
  physician,
  oculist,
  psychiatrist,
  neurologist,
  narcologist,
];
