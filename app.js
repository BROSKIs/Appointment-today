import express from "express";

const app = express();

const PORT = 3002;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));

const schedules=[];

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get("/admin", (req, res)=>{
  res.send(schedules)
});

app.post("/submit", (req, res) => {
  // fname=sdf& lname=sdf& date=  time=#
  const schedule = {
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date ? req.body.date: "none",
    time: req.body.time ? req.body.time: "none",
    timestamp: new Date(),
  };

  schedules.push(schedule);

  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
