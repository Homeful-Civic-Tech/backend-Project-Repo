const {pool} = require('../db.js');
const sheltersList = require('../models/sheltersModels.js')



const allShelters = async(req,res) => {
    const shelters = await sheltersList.getShelters()
    res.status(200).json(shelters.rows)
}

const oneShelter = async(req,res) => {
    const id = req.params.id;
    const shelter = await sheltersList.shelterId(id)
    res.status(200).json(shelter.rows)
}

const UserShelter = async(req,res) => {
    const user_id = req.params.user_id;
    const shelter = await sheltersList.getUserShelter(user_id)
    res.status(200).json(shelter.rows)
}

module.exports ={
    allShelters,
    oneShelter,
    UserShelter
}