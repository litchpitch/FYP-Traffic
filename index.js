const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require ('./model/Users')

const app = express()
app.use(cors())
app.use(express.json())



app.get('/getUsers' , (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log("Server is running")
}    
)
