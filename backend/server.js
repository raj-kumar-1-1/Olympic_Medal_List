require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Users = require("./models/user");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const Country=require("./models/country");
const history=require("./models/history")
const details=require("./models/countrydetails")
const path = require('path');
const standings=require("./models/standings");
const fs=require("fs");
const MONGO_URI=process.env.MONGO_URI;
const PORT = process.env.PORT ||3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.set('view engine','ejs');
app.use(express.static('pages'));
app.use('/styling', express.static(path.join(__dirname, 'styling')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));



mongoose.connect(`${MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});
app.use(express.static("assets"));
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });

        if (!user)
            return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: "Invalid password" });

        res.status(200).json({
            message: "Login successful",
            user: {
                username: user.username,
                email: user.email,
                fullname: user.fullname
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
});

app.post("/api/signup", async (req, res) => {
    const { fullname, email, mobile_number, username, password } = req.body;

    try {
        const existingUser = await Users.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            fullname,
            email,
            mobile_number,
            username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Signup failed", error: err.message });
    }
});

 



app.post('/add-country', async (req, res) => {
  try {
    
    const { countryName, olympics } = req.body;
    const year = Object.keys(olympics)[0]; 

    const existing = await Country.findOne({
      countryName,
      [`olympics.${year}`]: { $exists: true }
    });

    if (existing) {
      return res.status(400).json({ error: `Data for ${countryName} in ${year} already exists.` });
    }

    let country = await Country.findOne({ countryName });

    if (country) {
      country.olympics.set(year, olympics[year]);
      await country.save();
      res.status(200).json({ message: 'Year added to existing country.' });
    } else {
      const newCountry = new Country(req.body);
      await newCountry.save();
      res.status(201).json({ message: 'New country added.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// app.get("/api/standings/:year", async (req, res) => {
//   const year = parseInt(req.params.year);
//   try {
//     const data = await Country.find({ year })
//       .lean()
//       .sort({
//         "medals.gold": -1,
//         "medals.silver": -1,
//         "medals.bronze": -1
//       })
//       .limit(3);
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.get("/standings/:year", async (req, res) => {
  try {
    const year=req.params.year;
    const result = await standings.findOne({ year: year });

    if (!result) {
      return res.status(404).json({ error: "No data found for year " + year });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get('/country/:name', async (req, res) => {
  try {
    const country = await Country.findOne({ countryName: req.params.name });

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get('/history/:name', async (req, res) => {
  try {
    const countryName = req.params.name;
    const country = await history.findOne({ countryName });

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    const olympicData = country.olympics;
    const result = [];

    for (let [year, medals] of olympicData.entries()) {
      result.push({
        year,
        gold: medals.gold?.count || 0,
        silver: medals.silver?.count || 0,
        bronze: medals.bronze?.count || 0
      });
    }

    res.json({
      countryName,
      flag: country.flag,
      description:country.description,
      olympics: result
    });

  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/pages/sportPage.html",(req,res)=>{
    const file=fs.readFileSync('./pages/sportPage.html','utf-8');
    res.status(200).send(file);


});

app.get("/",(req,res)=>{
  const file=fs.readFileSync('./pages/index.html','utf-8');
    res.status(200).send(file);
});



app.listen(PORT,(req,res)=>{
console.log(`app is listening to port ${PORT} `);
});