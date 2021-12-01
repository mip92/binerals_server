const ApiError = require('../exeptions/api-error')

class LoginController {
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const users=[
                {id:0, email:'0@com.ua',image:'0.jpg',password:'000000'},
                {id:1, email:'1@com.ua',image:'1.jpg',password:'111111'},
                {id:2, email:'2@com.ua',image:'2.jpg',password:'222222'},
                {id:3, email:'3@com.ua',image:'3.jpg',password:'333333'},
                {id:4, email:'4@com.ua',image:'4.jpg',password:'444444'},
                {id:5, email:'5@com.ua',image:'5.jpg',password:'555555'},
                {id:6, email:'6@com.ua',image:'6.jpg',password:'666666'},
                {id:7, email:'7@com.ua',image:'7.jpg',password:'777777'},
                {id:8, email:'8@com.ua',image:'8.jpg',password:'888888'},
                {id:9, email:'9@com.ua',image:'9.jpg',password:'999999'},
                {id:10, email:'10@com.ua',image:'10.jpg',password:'101010'},
            ]
            let u=users.filter(u=>{if(u.email===email && u.password===password) return u})
            if (u.length===0) return next(ApiError.BadRequest('User is not found or password is wrong'))
            delete u[0].password
            return res.status(200).json({user: u[0]})
        } catch (e) {
            console.log(e)
            next(ApiError.BadRequest(e.parent.detail))
        }
    }

}

module.exports = new LoginController()