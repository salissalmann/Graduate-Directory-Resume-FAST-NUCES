const mongoose = require('mongoose');
const {Schema } = mongoose;

const ExperienceSchema = new mongoose.Schema(
{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    company:
    {
        type: String,
        required: true
    },
    position:
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
    }
});

const User = mongoose.model('StudentWorkExperience' , ExperienceSchema);
module.exports = User;