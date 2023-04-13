const mongoose = require('mongoose');
const {Schema } = mongoose;

const DescriptionSchema = new mongoose.Schema(
{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    description:
    {
        type: String,
        required: true
    },
});

const User = mongoose.model('StudentDescription' , DescriptionSchema);
module.exports = User;