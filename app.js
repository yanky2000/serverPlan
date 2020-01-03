const express = require('express');
const cors = require('cors');
const RESPONES = require('./fixtures');
const visits = require('./tempData');
// import { visits } from './visits';

const app = express();
app.use(
	cors({
		credentials: true
	})
);
app.use(express.urlencoded());
app.use(express.json());

app.listen(3000, () => console.log('working server!'));

app.get('/', (req, res) => {
	res.send('express is send!');
});

app.get('/visits', (req, res) => {
	res.send(visits.visits);
});
app.post('/newvisit', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.post('/parametersV2', (req, res) => {
	res.set();
	res.send(
		RESPONES.paramsV2
		// {
		// corporate: { parameters: { key: "CHAT_ENABLE", value: "true" } },
		// }
	);
});

app.post('/fields', (req, res) => {
	res.set();
	res.send(RESPONES.fields);
});
app.post('/dictionary', (req, res) => {
	res.set();
	res.send(RESPONES.dictionary);
});

app.post('/history', (req, res) => {
	res.send(RESPONES.history);
});
app.post('/registerV2', (req, res) => {
	res.send(RESPONES.register);
});
app.post('/auth', (req, res) => {
	res.send({ errorCode: -1 });
});
app.post('/sendPreview', (req, res) => {
	res.send();
});
// app.post("/sessionsV2/read", (req, res) => {
// res.send(RESPONES.read);
// res.end()
//     res.set("Connection", "close");
// });
app.post('/sessionsV2/subscribe', (req, res) => {
	res.send();
});
