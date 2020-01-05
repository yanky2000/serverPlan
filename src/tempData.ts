import {IDoctor, IClinic} from '../../medPlan/src/models'

const dumpAddress = {
	email: 'some@mail.ru',
	phone: 1234,
	address: {
		country: 'Russia',
		city: 'Moscow',
		zipCode: 123456,
		address: 'Pokrovka 21-14'
	}
};
const narcologist:IDoctor  = {
	doctorId: 'oculist1',
	firstName: 'Ivan',
	lastName: 'Sidorov',
	specialization: ['narcologist'],
	title: 'MD',
	gender: 'Male',
	contacts: dumpAddress
};
const neurologist:IDoctor = {
	doctorId: 'oculist1',
	firstName: 'Maria',
	lastName: 'Johnson',
	specialization: ['neurologist'],
	title: 'MD',
	gender: 'Female',
	contacts: dumpAddress
};
const psychiatrist:IDoctor = {
	doctorId: 'oculist1',
	firstName: 'Sergey',
	lastName: 'Petrov',
	specialization: ['psychiatrist'],
	title: 'MD',
	gender: 'Male',
	contacts: dumpAddress
};
const oculist:IDoctor = {
	doctorId: 'oculist1',
	firstName: 'Sergey',
	lastName: 'Petrov',
	specialization: ['oculist'],
	title: 'MD',
	gender: 'Male',
	contacts: dumpAddress
}

const doctor:IDoctor = {
	doctorId: 'firstDoc',
	firstName: 'Ivan',
	lastName: 'Morozov',
	specialization: ['physician'],
	title: 'MD',
	gender: 'Male',
	contacts: dumpAddress
};

const clinic: IClinic = {
	clinicId: 'firstClinic',
	title: 'Best Clinic in the World',
	contacts: dumpAddress
};

const visits = {
	visit1: {
		visitId: 'visit1',
		title: 'visit to dentist one',
		patiendId: 'patient1',
		date: '2020-01-06',
		doctor: doctor,
		clinic: clinic,
		time: '12:00',
		results: {
			visitId: 'visit1',
			diagnosis: 'flu',
			prescriptions: 'stay home for 3 days'
		}
	}
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

module.exports = { visits };
 