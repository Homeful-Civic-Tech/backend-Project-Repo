const { request, response } = require('express');
const {pool} = require('../db.js');
const user = require('../models/usersModels.js')
const bcrypt = require('bcrypt')

const addUser = async (request, response) => {
    const {firstname,lastname,username,email,sex,password} = request.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const postUser =  user.postUserToDB(firstname,lastname,username,email,sex,hashedPassword);
        const insertedUser = postUser.rows[0];
        response.send(insertedUser);
    }catch{
        response.send('Need all info on user.');
    }

    
}

const authUser = async(request,response) =>{
    const username = request.params.name;
    const password = request.params.password;
    const userInfo = await user.checkUser(username);
    if (userInfo.rows.length === 0 ){
        return response.send({alert: "Wrong Username"});
    }
    try{
        if (await bcrypt.compare(password, userInfo.rows[0].password)){
            return response.send({alert: "loged in", data: userInfo.rows[0]});
            


        }else {
            return response.send({alert:'Wrong Password'});
        }
    }catch{
        return response.send('Did not go to database');
    }
}




module.exports ={
    addUser,
    authUser,
    
}

