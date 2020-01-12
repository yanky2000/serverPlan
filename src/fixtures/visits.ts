import { IVisit } from '../../../medPlan/src/models';

export const visit1: IVisit = {
  uid: 'visit1',
  title: 'visit to dentist one',
  patient: 'patient1',
  date: '2020-01-06',
  doctor: 'doc1',
  clinic: 'clinic1',
  time: '12:00',
};

export const visit2 = {
  uid: 'visit1',
  title: 'visit to another doc',
  patiendId: 'patient1',
  date: '2020-01-08',
  doctorId: 'doc2',
  clinicId: 'clinic2',
  time: '11:00',
};

export const visits = [visit1, visit2];
