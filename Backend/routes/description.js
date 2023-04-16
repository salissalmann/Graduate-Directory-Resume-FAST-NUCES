const express = require('express');
const Router = express.Router();

const FetchUser = require('./middleware');
const Student = require('../models/student');
const Description = require('../models/description');


Router.post('/AddDescription' , FetchUser , async(req,res)=>
{
    try
    {
        const Success = true;
        const desc = new Description({
            user: req.user.id,
            description: req.body.description              
        })        
        const addedEducation = await desc.save();
        return res.status(200).json({ Success, addedEducation });
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
})

Router.get('/GetDescriptionStatus', FetchUser , async (req, res) => {
    try
    {
        const Success = true
        const description = await Description.find({ user: req.user.id });
        if(description.length>0)
        {
            return res.status(200).json({ Success, description });
        }
        else
        {
            return res.status(200).json({ Success:false, description });
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

Router.post('/UpdateDescription' , FetchUser , async(req,res)=>
{
    try
    {
        const Success = true;
        const description = await Description.findOneAndUpdate({user: req.user.id}, {description: req.body.description});
        return res.status(200).json({ Success, description });
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }   
})

Router.get('/GetDescription' , FetchUser , async(req,res)=>
{
    try
    {
        const Success = true;
        const description = await Description.find({user: req.user.id});
        const descriptionText = description[0].description;
        return res.status(200).json({ Success, descriptionText });
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
})

module.exports = Router;



