const Router = require('express').Router;
const router = new Router();
const loginController = require('../controllers/login.controller')
const checkRules = require('../middlwares/checkRulesMiddleware')
let {body} = require('express-validator');

validationUser = [
    body('password', "password must be longer than 6 symbols").isLength({min: 6}).not().isEmpty().escape(),
    body('email', 'email must be a valid email format').not().isEmpty().isEmail().normalizeEmail()
];

router.post('/', validationUser, checkRules, loginController.login);

module.exports = router
