import express from "express";

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post("/submit", (req, res) => {
  const schedule = {
    fname: req.body.fname,
    lname: req.body.lame,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date(),
  };
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
