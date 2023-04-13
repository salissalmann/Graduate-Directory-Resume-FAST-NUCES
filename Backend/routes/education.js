const express = require('express');
const Router = express.Router();

const FetchUser = require('./middleware');
const Student = require('../models/student');
const Project = require('../models/projects');
const Education = require('../models/education');

var bodyParser = require('body-parser')

Router.post('/AddEducation', FetchUser , async (req, res) => 
{
    try
    {
        const Success=true
        const education = new Education({
            user: req.user.id,
            institution: req.body.institution,
            degree: req.body.degree,
            startYear: req.body.startYear,
            endYear: req.body.endYear,
            description: req.body.description
        });
        const addedEducation = await education.save();
        return res.status(200).json({ Success, addedEducation });
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

Router.get('/GetEducationStatus', FetchUser , async (req, res) => {
    try
    {
        const Success=true
        const education = await Education.find({ user: req.user.id });
        if(education.length>0)
        {
            return res.status(200).json({ Success, education });
        }
        else
        {
            return res.status(200).json({ Success:false, education });
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});



module.exports = Router;
