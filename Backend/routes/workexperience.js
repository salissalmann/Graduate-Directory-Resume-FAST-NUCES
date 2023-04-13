const express = require('express');
const Router = express.Router();

const FetchUser = require('./middleware');
const Student = require('../models/student');
const Project = require('../models/projects');
const Education = require('../models/education');
const WorkExperience = require('../models/workExperience');

var bodyParser = require('body-parser')

Router.post('/AddWorkExperience', FetchUser , async (req, res) => 
{
    try
    {
        const Success=true
        const workExperience = new WorkExperience({
            user: req.user.id,
            company: req.body.company,
            position: req.body.position,
            startYear: req.body.startYear,
            endYear: req.body.endYear,
            description: req.body.description
        });
        const addedWorkExperience = await workExperience.save();
        return res.status(200).json({ Success, addedWorkExperience });
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

Router.get('/GetWorkExperienceStatus', FetchUser , async (req, res) => {
    try
    {
        const Success=true
        const workExperience = await WorkExperience.find({ user: req.user.id });
        if(workExperience.length>0)
        {
            return res.status(200).json({ Success, workExperience });
        }
        else
        {
            return res.status(200).json({ Success:false, workExperience });
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});


module.exports = Router;
