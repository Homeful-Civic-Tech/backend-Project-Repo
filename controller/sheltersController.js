const {pool} = require('../db.js');
const sheltersList = require('../models/sheltersModels.js')


const allShelters = async(req,res) => {
    const shelters = await sheltersList.getShelters()
    res.status(200).json(shelters.rows)
}
const postShelters = async(req,res) => {
    const {shelter_name,location} = req.body;
    const shelters = await sheltersList.addShelters(shelter_name,location)
    res.status(200).json(shelters.rows[0])
}
module.exports ={
    allShelters,
    postShelters
}