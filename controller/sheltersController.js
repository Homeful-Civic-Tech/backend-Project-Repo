const {pool} = require('../db.js');
const sheltersList = require('../models/sheltersModels.js')


const allShelters = async(req,res) => {
    const shelters = await sheltersList.getShelters()
    res.status(200).json(shelters.rows)
}

const oneShelter = async(req,res) => {
    const id = req.params.id;
    const shelter = await sheltersList.shelterId(id)
    res.status(200).json(shelter)
}

module.exports ={
    allShelters,
    oneShelter
}