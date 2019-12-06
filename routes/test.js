const router = require('express').Router();

const QUESTIONS = require('../seed/sat-questions.json');
const ANSWERS = require('../seed/sat-answers.json');

const {
    generateToken
} = require('../services/generateToken');

router.get('/questions', async (req, res) => {
    try {
        res.json(QUESTIONS);

    } catch (error) {
        res.send(400).send(error);
    }
});

module.exports = router;