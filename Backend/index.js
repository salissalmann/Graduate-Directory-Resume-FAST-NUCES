const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');
const FetchUser = require("./routes/middleware");
const User = require('./models/studentDetails');
const PersonalInfo = require("./models/studentDetails");
const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const DBstring = process.env.MONGODB_URL;

mongoose.set('strictQuery',true)

const ConnectToMongo = async () => {
  try {
    await mongoose.connect(DBstring);
    console.log("Connected to database successfully!");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};
ConnectToMongo();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb)=> {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage });

app.use(express.json())


app.use(cors());
app.use('/student' , require('./routes/student'))

app.use('/handledata' , require('./routes/handledata'))
app.use('/projects' , require('./routes/projects'))
app.use('/education' , require('./routes/education'))
app.use('/workexperience' , require('./routes/workexperience'))
app.use('/fyp' , require('./routes/fyp'))
app.use('/description' , require('./routes/description'))

app.post('/addDetails',upload.single('testImage'),  FetchUser ,  async (req, res) => {
    try {
        const saveImage = new User({
        user: req.user.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        jobTitle: req.body.jobTitle,
        linkedIn: req.body.linkedIn,
        country: req.body.country,
        city: req.body.city,
        img: {
          data: fs.readFileSync('uploads/' + req.file.filename),
          contentType: 'image/png'
        },
        GPA: req.body.GPA
      });
  
      const addedUser = await saveImage.save(); 
      res.status(200).send({ success: true , addedUser });
    } catch (error) {
      res.status(404).json({ error });
    }
  });

app.get('/CheckPersonalInfo', FetchUser , async (req, res) => 
{
    try 
    {
      let SearchPersonalInfo = await PersonalInfo.findOne({ user: req.user.id });
      let Found = false;
      if (SearchPersonalInfo) 
      {
        Found = true;
        res.status(200).send({ success: true , Found: Found });
      } 
      else 
      {
        res.status(200).send({ success: false , Found: Found });
      }
    } catch (error) 
    {
      res.status(404).json({ error });
    }
});

const PORT = process.env.PORT || 3001;
app.listen( PORT , ()=> {console.log("LISTENING AT PORT: 3001")} )
