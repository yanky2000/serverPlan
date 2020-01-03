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

const doctor = {
	doctorId: 'firstDoc',
	firstName: 'Ivan',
	lastName: 'Morozov',
	specialization: ['physician'],
	title: 'MD',
	gender: 'Male',
	contacts: dumpAddress
};

const clinic = {
	clinicId: 'firstClinic',
	title: 'Best Clinic in the World',
	contacts: dumpAddress
};

const visits = {
	visit1: {
		visitId: 'visit1',
		title: 'visit to dentist one',
		patiendId: 'patient1',
		date: '30/07/19',
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
