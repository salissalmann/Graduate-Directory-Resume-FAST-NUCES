const mongoose = require('mongoose');
const {Schema } = mongoose;

const EducationSchema = new mongoose.Schema(
{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    institution:
    {
        type: String,
        required: true
    },
    degree:
    {
        type: String,
        required: true
    },
    startYear:
    {
        type: String,
        required: true
    },
    endYear:
    {
        type: String,
    },
    description:
    {
        type: String,
        required: true
    },
});

const User = mongoose.model('StudentEducation' , EducationSchema);
module.exports = User;