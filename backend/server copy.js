const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Users = require("./models/user");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/olympics", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

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




// const userSchema=mongoose.Schema({
//     fullname:{type:String,required:true},
//     email:{type:String,required:true,unique:true},
//     mobile_number:{type:String,required:true,unique:true},
//      username:{type:String,required:true,unique:true},
//     password:{type:String,required:true}
// });
const  olympicsSchema=mongoose.Schema({
    olympic:[
    {
      year: { type: Number, required: true },
      about: { type: String },
      achievements: { type: [String] }, 
      image: { type: String }
    }
  ]});


const playerSchema = new mongoose.Schema({
  sportName:{type:String, required:true},
  playername: { type: String, required: true },
  details: { type: String }
}, { _id: false });

const medalSchema = new mongoose.Schema({
  count: { type: String, required: true },
  sports: {
    type: Map,
    of: playerSchema
  }
}, { _id: false });

const yearSchema = new mongoose.Schema({
  gold: { type: medalSchema },
  silver: { type: medalSchema },
  bronze: { type: medalSchema }
}, { _id: false });

const countrySchema = new mongoose.Schema({

  olympics: {
    type: Map, 
    
    of: {
      type: Map,
      of: yearSchema
    }
  }
});

// const User=mongoose.model("userData",userSchema);






app.get("/",(req,res)=>{
    res.status(200);
});














app.listen(PORT,(req,res)=>{
console.log(`app is listening to port ${PORT} `);
});