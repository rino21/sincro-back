const Historique = require('../models/historique')

const getAllHistorique = async (req, res) => {
    try {
        const [rows] =  await Historique.getHistoriqueGlobal()
        await Historique.setHistoriqueGlobalCheck()
        res.json(rows)
    } catch (error) {
        res.send({message : error.message})
    }
}

const getAllHistoriqueById = async (req, res) => {
    try {
        const [rows] =  await Historique.getHistoriqueGlobalById(req.params.id)
        await Historique.setHistoriquePropreCheck(req.params.id)
        res.json(rows)
    } catch (error) {
        res.send({message : error.message})
    }
}

const getNombreHistorique = async (req, res)=>{
    try {
        const [rows]= await Historique.getNombreHistorique()
        res.json(rows[0])
    } catch (error) {
        res.send({message : error.message})
    }
}

module.exports = {getAllHistorique, getAllHistoriqueById, getNombreHistorique}
