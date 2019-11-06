require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive')
const session = require('express-session')
const {register, login, logout, userSession } = require('./controller/userController')
const userController = require('./controller/userController')
app.use(express.json())

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitalized:false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

massive(CONNECTION_STRING).then(dbInstance => {
    console.log('data base is lit')
    app.set('db', dbInstance)
})

// register ********************************************
app.post('/auth/register', register)

// login ********************************************
app.post('/auth/login', login)

// user session ********************************************
app.get('/auth/user_session', userSession)

// logout ********************************************
app.delete('/auth/logout', logout)

let port = SERVER_PORT || 5000
app.listen(port, () => console.log(`hear ya bruh on ${port}`))