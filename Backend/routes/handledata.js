const express = require('express');
const Router = express.Router();

const FetchUser = require('./middleware');
const Student = require('../models/student');
var bodyParser = require('body-parser');
const { Rotate90DegreesCcw } = require('@mui/icons-material');
var jsonParser = bodyParser.json()

Router.put('/AddSkills/:skill', FetchUser  , jsonParser , async (req, res) => 
{
    const RequestUser = await Student.findOne( { _id : req.user.id })
    try
    {
        const Success=true
        RequestUser.skills.push(req.params.skill);
        let Update = await Student.findByIdAndUpdate( req.user.id, {$set: RequestUser} , {new:true} )
        return res.json({Success:Success});
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
});

Router.put('/DeleteSkills/:skill', FetchUser  , jsonParser , async (req, res) => 
{
    const RequestUser = await Student.findOne( { _id : req.user.id })
    
    const Success=true
    RequestUser.skills.map((elements)=>
    {
        if(elements===req.params.skill)
        {
            RequestUser.skills.pop(req.params.skill);
        }
    })
    let Update = await Student.findByIdAndUpdate( req.user.id, {$set: RequestUser} , {new:true} )
    return res.json( {Success:Success});
});

Router.get('/CheckSkills', FetchUser , async (req, res) => {
    try
    {
        const RequestUser = await Student.findOne( { _id : req.user.id })
        if(RequestUser.skills.length>0)
        {
            return res.json({Success:true});
        }
        else
        {
            return res.json({Success:false});
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
})

Router.get('/GetSkills', FetchUser , async (req, res) => {
    try
    {
        const RequestUser = await Student.findOne( { _id : req.user.id })
        if(RequestUser.skills.length>0)
        {
            return res.json({Success:true , Skills: RequestUser.skills});
        }
        else
        {
            return res.json({Success:false});
        }
    }
    catch (error)
    {
        return res.status(400).json({ Error: "An Error Occured"});   
    }
})


module.exports = Router;
