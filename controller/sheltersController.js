const {pool} = require('../db.js');
const sheltersList = require('../models/sheltersModels.js')


const allShelters = async(req,res) => {
    const shelters = await sheltersList.getShelters()
    res.status(200).json(shelters.rows)
}
const getCategoryShelters = async(req, res) => {
    const category = req.params.category;
    const shelters = await sheltersList.getCategoryShelters(category)
    res.status(200).json(shelters.rows)
}
const getSearchShelters = async(req, res) => {
    const search = req.params.search;
    const shelters = await sheltersList.getSearchShelters(search)
    res.status(200).json(shelters.rows)
}
const postShelters = async(req,res) => {
    const {shelter_name,location} = req.body;
    const shelters = await sheltersList.addShelters(shelter_name,location)
    res.status(200).json(shelters.rows[0])
}
const oneShelter = async(req,res) => {
    const id = req.params.id;
    const shelter = await sheltersList.shelterId(id)
    res.status(200).json(shelter)
}
module.exports ={
    allShelters,
    postShelters,
    getSearchShelters,
    getCategoryShelters,
    oneShelter}
