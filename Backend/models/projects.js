const mongoose = require('mongoose');
const {Schema } = mongoose;

const ProjectSchema = new mongoose.Schema(
{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title:
    {
        type: String,
        required: true
    },
    link:
    {
        type: String,
    },
    description:
    {
        type: String,
        required: true
    }
});

const User = mongoose.model('StudentProjects' , ProjectSchema);
module.exports = User;