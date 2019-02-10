const express = require("express");
const cors = require("cors");
const RESPONES = require("./fixtures");

console.log(1, RESPONES)

const users = {
	name: "vasya",
	age: 21,
};

const app = express();
app.use(
	cors({
		credentials: true,
	})
);
app.listen(3000, () => console.log("working server!"));

app.get("/", (req, res) => {
	res.send("express is send!");
});

app.post("/parametersV2", (req, res) => {
	res.set();
	res.send(
		RESPONES.paramsV2
		// {
		// corporate: { parameters: { key: "CHAT_ENABLE", value: "true" } },
		// }
	);
});

app.post("/fields", (req, res) => {
	res.set();
	res.send(RESPONES.fields);
});
app.post("/dictionary", (req, res) => {
	res.set();
	res.send(RESPONES.dictionary);
});

app.post("/customer/chatHistory", (req, res) => {
	res.send();
});
app.post("/register", (req, res) => {
	res.send(RESPONES.register
    );
});
app.post("/sendPreview", (req, res) => {
	res.send(
    );
});
// app.post("/sessionsV2/read", (req, res) => {
	// res.send(RESPONES.read);
    // res.end()
//     res.set("Connection", "close");
// });
app.post("/sessionsV2/subscribe", (req, res) => {
	res.send(
    );

});
