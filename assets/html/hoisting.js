const express = require("express");
const app = express();
const cors=require("cors");
const bodyParser = require("body-parser");
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs');
app.post("/addUser", (req, res) => {
  const name = req.body.firstName+" "+req.body.lastName;
  res.render("idex", { name });
});

app.listen(3030, () => {
  console.log("App listening on port 3030");
});
