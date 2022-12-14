const { request, response } = require('express');
const {pool} = require('../db.js');
const user = require('../models/usersModels.js')
const bcrypt = require('bcrypt')

const addUser = async (request, response) => {
    const {firstname,lastname,username,email,sex,password} = request.body;
    console.log(request.body, "before")
    try {
        console.log(request.body)
        const hashedPassword = await bcrypt.hash(password, 10)
        const postUser =  user.postUserToDB(firstname,lastname,username,email,sex,hashedPassword);
        const insertedUser = postUser.rows[0];
        response.send(insertedUser);
    }catch{
        response.send('all bad lol')
    }

    
}

const authUser = async(request,response) =>{
    const username = request.params.name;
    const password = request.params.password;
    console.log(username,password)
    const userInfo = await user.checkUser(username)

    if (userInfo.rows.length === 0 ){
        return response.send({alert: "invalid log in"})
    }
    try{
        if (await bcrypt.compare(password, userInfo.rows[0].password)){
            return response.send({alert: "loged in",data: userInfo.rows[0] })
            console.log(userInfo.rows[0])

        }else {
            return response.send({alert:'invalid log in 1'})
        }
    }catch{
        return response.send('not ok')
    }
}

module.exports ={
    addUser,
    authUser
}

