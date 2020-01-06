const express = require('express');
const cors = require('cors');
const RESPONES = require('../fixtures');
import { visits, doctors, clinics } from './tempData';
const uuid = require('uuid/v1');
const fileUpload = require('express-fileupload');
const app = express();

import { Request, Response } from 'express';

app.use(
	cors({
		credentials: true
	})
);
app.use(express.urlencoded());
app.use(express.json());
app.use(
	fileUpload({
		createParentPath: true
	})
);
app.listen(3000, () => console.log('working server!'));

app.get('/', (req: Request, res: Response) => {
	res.send('express is send!');
});

app.get('/visits', (req: Request, res: Response) => {
	res.send(visits);
});
app.post('/newvisit', (req: Request, res: Response) => {
	console.log(req.body);
	const newId = uuid();
	const newVisitWithId = { ...req.body, visitId: newId };
	res.send(newVisitWithId);
});

app.get('/doctors', (req: Request, res: Response) => {
	res.send(doctors);
});
app.get('/adddoctors', (req: Request, res: Response) => {
	console.log('adding doc', req.body);
	res.send(req.body);
});
app.get('/clinics', (req: Request, res: Response) => {
	res.send(clinics);
});
app.get('/addclinic', (req: Request, res: Response) => {
	console.log('adding clinic', req.body);
	res.send(req.body);
});
app.post('/addfile', (req: any, res: Response) => {
	console.log(req.files.file);
	res.send(req.files.file);
});
// app.post('/parametersV2', (req, res) => {
// 	res.set();
// 	res.send(
// 		RESPONES.paramsV2
// 		// {
// 		// corporate: { parameters: { key: "CHAT_ENABLE", value: "true" } },
// 		// }
// 	);
// });

// app.post('/fields', (req, res) => {
// 	res.set();
// 	res.send(RESPONES.fields);
// });
// app.post('/dictionary', (req, res) => {
// 	res.set();
// 	res.send(RESPONES.dictionary);
// });

// app.post('/history', (req, res) => {
// 	res.send(RESPONES.history);
// });
// app.post('/registerV2', (req, res) => {
// 	res.send(RESPONES.register);
// });
// app.post('/auth', (req, res) => {
// 	res.send({ errorCode: -1 });
// });
// app.post('/sendPreview', (req, res) => {
// 	res.send();
// });
// // app.post("/sessionsV2/read", (req, res) => {
// // res.send(RESPONES.read);
// // res.end()
// //     res.set("Connection", "close");
// // });
// app.post('/sessionsV2/subscribe', (req, res) => {
// 	res.send();
// });
