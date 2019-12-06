const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        school: Joi.string().min(6).required(),
        phone: Joi.string().min(0).max(10).required(),
        password: Joi.string().min(6).required()
    });

    // Lets Validate
    return schema.validate(data); 
};

module.exports.registerValidation = registerValidation;


// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        phone: Joi.string().min(0).max(10).required(),
        password: Joi.string().min(6).required()
    });

    // Lets Validate
    return schema.validate(data); 
};

module.exports.loginValidation = loginValidation;