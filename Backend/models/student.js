const mongoose = require('mongoose');
const {Schema } = mongoose;

const StudentSchema = new Schema(
    {
            name: 
            {
                type: String,
                required: true,
            },
            rollNumber:
            {
                type: String,
                required: true,
            },
            email:
            {
                type: String,
                unique: true,
                required: true,
            },
            password: 
            {
                type: String,
            },
            department:
            {
                type: String,
                required: true,
            },
            skills: {
                type: Array,
                default: []
            },
            timestamp: 
            {
                type: Date,
                default: Date.now,
            },
    }
);
const Students = mongoose.model('Students' , StudentSchema);
module.exports = Students;