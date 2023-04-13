const express = require('express');
const Router = express.Router();

const FetchUser = require('./middleware');
const Student = require('../models/student');
const Project = require('../models/projects');
const Education = require('../models/education');
const FYP = require('../models/fyp');

Router.get('/GetFYPStatus', FetchUser , async (req, res) => {
    try
    {
        const student = await Student.findById(req.user.id);
        const Success=true
        const fyp = await FYP.find({ 
            $or: [
                { member1Email: student.email },
                { member2Email: student.email },
                { member3Email: student.email }
                ]
         });
        if(fyp.length>0)
        {
            return res.status(200).json({ Success, fyp });
        }
        else
        {
            return res.status(200).json({ Success:false, fyp });
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
})

Router.post('/AddFYP', FetchUser , async (req, res) =>
{
    try
    {
        let ShortProjectTitle = "F22-"
        if(req.body.projectType === "Development")
        {
            ShortProjectTitle += "D"
        }
        else if(req.body.projectType === "Research")
        {
            ShortProjectTitle += "R"
        }
        ShortProjectTitle += "-";
        ShortProjectTitle += req.body.shortTitle

        const Success=true
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
            coSupervisor: req.body.coSupervisor
        });
        const addedFYP = await fyp.save();
        return res.status(200).json({ Success, addedFYP });
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

module.exports = Router;
