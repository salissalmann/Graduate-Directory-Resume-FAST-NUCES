const express = require('express');
const Router = express.Router();

const FetchUser = require('./middleware');
const Student = require('../models/student');
const Project = require('../models/projects');

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

Router.post('/AddProject', FetchUser , async (req, res) => 
{
    try
    {
        const Success=true
        const project = new Project({
            user: req.user.id,
            title: req.body.title,
            link: req.body.link,
            description: req.body.description
        });
        const addedProject = await project.save();
        return res.status(200).json({ Success, addedProject });
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

Router.get('/GetProjectStatus', FetchUser , async (req, res) => {
    try
    {
        const Success=true
        const project = await Project.find({ user: req.user.id });
        if(project.length>0)
        {
            return res.status(200).json({ Success });
        }
        else
        {
            return res.status(200).json({ Success:false });
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

Router.get('/GetProjects', FetchUser , async (req, res) => {
    try
    {
        const Success=true
        const project = await Project.find({ user: req.user.id });
        if(project.length>0)
        {
            return res.status(200).json({ Success, project });
        }
        else
        {
            return res.status(200).json({ Success:false });
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

Router.delete('/DeleteProject/:id', FetchUser , async (req, res) => {
    try
    {
        const Success=true
        const project = await Project.findByIdAndDelete(req.params.id);
        if(project)
        {
            return res.status(200).json({ Success });
        }
        else
        {
            return res.status(200).json({ Success:false });
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});


module.exports = Router;
