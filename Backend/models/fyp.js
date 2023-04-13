const mongoose = require('mongoose');
const {Schema } = mongoose;

const FYPSchema = new mongoose.Schema(
{
    member1Email:
    {
        type: String,
        required: true
    },
    member2Email:
    {
        type: String,
    },
    member3Email:
    {
        type: String,
    },
    shortTitle:
    {
        type: String,
        required: true
    },
    shortProjectTitle:
    {
        type: String,
        required: true
    },
    projectTitle:
    {
        type: String,
        required: true
    },
    projectType:
    {
        type: String,
        required: true
    },
    projectDescription:
    {
        type: String,
        required: true
    },
    supervisor:
    {
        type: String,
        required: true
    },
    coSupervisor:
    {
        type: String,
    },
});

const User = mongoose.model('StudentFYP' , FYPSchema);
module.exports = User;