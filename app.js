import express from "express";

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const appointments = [];

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get("/admin", (req, res) => {
  res.send(appointments);
});

app.post("/submit", (req, res) => {
  const appointment = {
    fname: req.body.fname,
    lname: req.body.lame,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date(),
  };

  appointments.push(appointment);
  res.send(appointments);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
