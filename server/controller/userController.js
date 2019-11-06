const bcrypt = require('bcrypt')
module.exports = {
    register: async (req, res, next) => {
        const {username, email, password} = req.body;
        db = req.app.get('db');
        const foundUser  = await db.find_user(username)

            if(foundUser.length){
                res.status(400).send('that user exist')

            }else{
                const saltRounds = 12;
                const salt = await bcrypt.genSalt(saltRounds)
                const hashedPaswored = await bcrypt.hash(password, salt);
                const [newUser] = await db.create_user([username, email, hashedPaswored,]).catch(err => {
                    console.log(err)
                })
                req.session.user = newUser;
                res.status(200).send(req.session.user)
            }
    },

    login: async (rq, res, next) => {
        const {username, password} =req.body;
        const db = req.app.get('db');
        const [foundUser] = await db.find_user(username)

            if(!foundUser){
                res.status(400).send('try again')
            }else{
                const isAuthenticated = bcrypt.compare(password, foundUser.password)

                if(isAuthenticated){
                    req.session.user = {
                        user_id: foundUser.user_id,
                        username: foundUser.username,
                        email: foundUser.email
                    }
                
                    res.status(200).send(req.session.user)
                }else{
                    res.status(400).send('password does not match')
                }
                
            }
    },

    logout: async (req, res, next) => {
        req.session.destroy()
        res.status(200).send('loged out')
    },

    userSession: (req, res, next) => {
        res.status(200).send(req.session.user)
    }

}