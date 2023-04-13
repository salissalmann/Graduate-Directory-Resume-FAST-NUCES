const mongoose = require('mongoose');
const {Schema } = mongoose;

const personalInfoSchema = new mongoose.Schema(
{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    jobTitle: { type: String, required: true },
    linkedIn: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    img:
    {
        data: Buffer,
        contentType: String
    },
    GPA: { type: String, required: true }
});

const User = mongoose.model('StudentDetails' , personalInfoSchema);
module.exports = User;