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

app.use(bodyParser.json({ limit: "150mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "150mb", extended: true }));

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
          contentType: 'image/*'
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

app.post('/UpdatePersonalInfo', upload.single('testImage'), FetchUser, async (req, res) => {
  try {
    const RequestedUser = await User.findOne({ user: req.user.id });
    if (RequestedUser) {
      const updatedFields = {};
      if (req.body.change === 'name') {
        updatedFields.firstName = req.body.firstName;
        updatedFields.lastName = req.body.lastName;
      }
      if (req.body.change === 'email') {
        updatedFields.email = req.body.email;
      }
      if (req.body.change === 'phone') {
        updatedFields.phone = req.body.phone;
      }
      if (req.body.change === 'jobTitle') {
        updatedFields.jobTitle = req.body.jobTitle;
      }
      if (req.body.change === 'linkedIn') {
        updatedFields.linkedIn = req.body.linkedIn;
      }
      if (req.body.change === 'country') {
        updatedFields.country = req.body.country;
      }
      if (req.body.change === 'city') {
        updatedFields.city = req.body.city;
      }
      if (req.body.change === 'testImage') {
        updatedFields.img = {
          data: fs.readFileSync('uploads/' + req.file.filename),
          contentType: 'image/*'
        };
      }
      if (req.body.change === 'GPA') {
        updatedFields.GPA = req.body.GPA;
      }

      const UpdatePersonalInfo = await User.findOneAndUpdate({ user: req.user.id }, { $set: updatedFields }, { new: true });
      const response = { success: true, UpdatePersonalInfo };
      res.status(200).send(response);
    } else {
      const response = { success: false, message: 'User not found' };
      res.status(404).send(response);
    }
  } catch (error) {
    const response = { success: false, message: 'Failed to update personal info' };
    res.status(500).send(response);
  }
});

const FYP = require('./models/fyp');

app.post('/AddFYP', upload.single('testImage'), FetchUser, async (req, res) => {
  try {
    let ShortProjectTitle = "F22-";
    if (req.body.projectType === "Development") {
      ShortProjectTitle += "D";
    } else if (req.body.projectType === "Research") {
      ShortProjectTitle += "R";
    }
    ShortProjectTitle += "-";
    ShortProjectTitle += req.body.shortTitle;

    const Success = true;
    const fyp = new FYP({
      member1Email: req.body.member1Email,
      member2Email: req.body.member2Email,
      member3Email: req.body.member3Email,
      shortTitle: req.body.shortTitle,
      shortProjectTitle: ShortProjectTitle,
      projectTitle: req.body.projectTitle,
      projectType: req.body.projectType,
      projectDescription: req.body.projectDescription,
      supervisor: req.body.supervisor,
      coSupervisor: req.body.coSupervisor,
      img: {
        data: fs.readFileSync('uploads/' + req.file.filename),
        contentType: 'image/*',
      },
    });
    const addedFYP = await fyp.save();
    return res.status(200).json({ Success, addedFYP });
  } catch (error) {
    return res.status(400).json({ Error: "An Error Occured" });
  }
});

app.put("/UpdateFYP", upload.single('testImage'), FetchUser, async (req, res) => {
  try {
    const RequestedUser = await User.findOne({ user: req.user.id });
    const UserEmail = RequestedUser.email;
    const UserFYP = await FYP.findOne({
      $or: [
        { member1Email: UserEmail },
        { member2Email: UserEmail },
        { member3Email: UserEmail }
     ]
     });

    if (UserFYP) {
      const updatedFields = {};
      if (req.body.change === 'shortTitle') {
        let ShortProjectTitle = "F22-";
        if (UserFYP.projectType === "Development") {
          ShortProjectTitle += "D";
        } else if (UserFYP.projectType === "Research") {
          ShortProjectTitle += "R";
        }
        ShortProjectTitle += "-";
        ShortProjectTitle += req.body.shortTitle;
        updatedFields.shortProjectTitle = ShortProjectTitle;
        updatedFields.shortTitle = req.body.shortTitle;
      }
      if (req.body.change === 'projectTitle') {
        updatedFields.projectTitle = req.body.projectTitle;
      }
      if (req.body.change === 'projectType') {
        updatedFields.projectType = req.body.projectType;
      }
      if (req.body.change === 'projectDescription') {
        updatedFields.projectDescription = req.body.projectDescription;
      }
      if (req.body.change === 'supervisor') {
        updatedFields.supervisor = req.body.supervisor;
      }
      if (req.body.change === 'coSupervisor') {
        updatedFields.coSupervisor = req.body.coSupervisor;
      }
      if (req.body.change === 'img') {
        updatedFields.img = {
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: 'image/*'  
        }
      }

      const UpdateFYP = await FYP.findOneAndUpdate({ _id: UserFYP._id }, { $set: updatedFields }, { new: true });
      const response = { success: true, UpdateFYP };
      res.status(200).send(response);
    } else {
      const response = { success: false, message: 'User not found' };
      res.status(404).send(response);
    }
  } catch (error) {
    const response = { success: false, message: 'Failed to update FYP' };
    res.status(500).send(response);
  }
});

app.get('/GetPersonalInfo', FetchUser, async (req, res) => {
  try {
    
    const PersonalDetails = await PersonalInfo.findOne({ user: req.user.id });
    res.status(200).json({Success:true , PersonalDetails});
  } catch (error) {
    res.status(400).json({ Error: "An Error Occured" });
  }
});





    

  

const PORT = process.env.PORT || 3001;
app.listen( PORT , ()=> {console.log("LISTENING AT PORT: 3001")} )
