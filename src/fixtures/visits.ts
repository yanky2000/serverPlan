import { clinic1 } from './clinics';
import { physician } from './doctors';

export const visits = {
  visit1: {
    visitId: 'visit1',
    title: 'visit to dentist one',
    patiendId: 'patient1',
    date: '2020-01-06',
    doctor: physician,
    clinic: clinic1,
    time: '12:00',
    results: {
      visitId: 'visit1',
      diagnosis: 'flu',
      prescriptions: 'stay home for 3 days',
    },
  },
  // visit2: {
  // 	visitId: 'visit2',
  // 	title: 'physician visits',
  // 	patiendId: 'patient1',
  // 	doctorId: 'doctor1',
  // 	date: '5/10/19',
  // 	time: '12:00',
  // 	clinicId: 'clinic1',
  // 	results: {
  // 		visitId: 'visit1',
  // 		diagnosis: 'flu',
  // 		prescriptions: 'stay home for 3 days'
  // 	}
  // }
};
