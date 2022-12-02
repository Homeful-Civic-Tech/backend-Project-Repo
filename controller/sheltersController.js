const {pool} = require('../db.js');
const sheltersList = require('../models/sheltersModels.js')


const allShelters = async(req,res) => {
    const shelters = await sheltersList.getShelters()
    console.log(shelters)
    res.status(200).json(shelters)
}

module.exports ={
    allShelters
}