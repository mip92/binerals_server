const ApiError = require('../exeptions/api-error')
const fs = require("fs");
const path = require("path");


class LoginController {
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            let ava=Math.floor(Math.random() * 10)
            return res.status(200).json({image:`http://localhost:5000/${ava}.jpg`, email})
        } catch (e) {
            console.log(e)
            next(ApiError.BadRequest(e.parent.detail))
        }
    }

}

module.exports = new LoginController()