const express = require('express');
const Router = express.Router();

const FetchUser = require('./middleware');
const Student = require('../models/student');
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

Router.get('/GetFYP', FetchUser , async (req, res) => {
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

module.exports = Router;
