import { IDoctor, IClinic, IUser } from '../../medPlan/src/models';

const dumpAddress = {
  email: 'some@mail.ru',
  phone: 1234,
  address: {
    country: 'Russia',
    city: 'Moscow',
    zipCode: 123456,
    street: 'Pokrovka 21-14',
  },
};
const narcologist: IDoctor = {
  doctorId: 'doc5',
  firstName: 'Ivan',
  lastName: 'Sidorov',
  specialization: ['narcologist'],
  title: 'MD',
  gender: 'Male',
  contacts: dumpAddress,
};
const neurologist: IDoctor = {
  doctorId: 'doc4',
  firstName: 'Maria',
  lastName: 'Johnson',
  specialization: ['neurologist'],
  title: 'MD',
  gender: 'Female',
  contacts: dumpAddress,
};
const psychiatrist: IDoctor = {
  doctorId: 'doc3',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: ['psychiatrist'],
  title: 'MD',
  gender: 'Male',
  contacts: dumpAddress,
};
const oculist: IDoctor = {
  doctorId: 'doc2',
  firstName: 'Sergey',
  lastName: 'Petrov',
  specialization: ['oculist'],
  title: 'MD',
  gender: 'Male',
  contacts: dumpAddress,
};

const doctor: IDoctor = {
  doctorId: 'doc1',
  firstName: 'Ivan',
  lastName: 'Morozov',
  specialization: ['physician'],
  title: 'MD',
  gender: 'Male',
  contacts: dumpAddress,
};

export const doctors = {
  doc1: doctor,
  doc2: oculist,
  doc3: psychiatrist,
  doc4: neurologist,
  doc5: narcologist,
};

const clinic: IClinic = {
  clinicId: 'clinic1',
  title: 'Best Clinic in the World',
  contacts: dumpAddress,
};

const clinic2: IClinic = {
  clinicId: 'clinic2',
  title: 'Memorial clinic',
  contacts: {
    ...dumpAddress,
    address: { ...dumpAddress.address, city: 'New York' },
  },
};
export const clinics = {
  clinic1: clinic,
  clinic2,
};
export const visits = {
  visit1: {
    visitId: 'visit1',
    title: 'visit to dentist one',
    patiendId: 'patient1',
    date: '2020-01-06',
    doctor,
    clinic,
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
export const User1: IUser = {
  userId: 'user1',
  firstName: 'Ivan',
  lastName: 'Petrov',
  login: 'Petrov1',
  gender: 'Male',
  password: '1234',
  contacts: dumpAddress,
};
