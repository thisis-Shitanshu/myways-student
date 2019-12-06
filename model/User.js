const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    flexibilityOfClosure: {
        type: Number,
        required: true,
        min: 0,
        max: 300
    },
    informationOrdering: {
        type: Number,
        required: true,
        min: 0,
        max: 300
    },
    visualization: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    spatialOrientation: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    science: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    deductiveReasoning: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    inductiveReasoning: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    problemSensitivity: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    categoryFlexibility: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    technical: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    mathematicalReasoning: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    writtenComprehension: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    school: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    phone: {
        type: String,
        required: true,
        max: 10,
        min: 0
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    score: {
        type: scoreSchema,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);