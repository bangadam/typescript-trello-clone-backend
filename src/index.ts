import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3000;

let lists: any[] = [];

app.post("/save", (req, res) => {
  console.log(req.body);
  lists = req.body.lists;
  res.send(lists);
});

app.get("/load", (req, res) => {
  res.send(lists);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
