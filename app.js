import express from "express";

const app = express();

const PORT = 3002;

app.use(express.static('public'));

const schedules=[];

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get("/admin", ()=>{
  res.sendFile(`${import.meta.dirname}/views/admin.html`);
});

app.post("/submit", (req, res) => {
  const schedule = {
    fname: req.body.fname,
    lname: req.body.lame,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date(),
  };
  schedules.push(schedule);

  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
