const {pool} = require('../db.js');
const sheltersList = require('../models/sheltersModels.js')


const allShelters = async(req,res) => {
    const shelters = await sheltersList.getShelters()
    res.status(200).json(shelters.rows)
}

module.exports ={
    allShelters
}