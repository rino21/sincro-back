// controllers/membreController.js
const Membre = require('../models/membre');

const getAllMembres = async (req, res) => {
  try {
    const [rows] = await Membre.getAllMembres();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMembreById = async (req, res) => {
  try {
    const [rows] = await Membre.getMembreById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: `${req.params.id} n'associe à aucun membre.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMembre = async (req, res) => {
  try {
    const result = await Membre.createMembre(req.body);
    res.status(201).json({ message: `Membre N° : ${req.body.membre_id} a été bien ajouté.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMembre = async (req, res) => {
  try {
    const result = await Membre.updateMembre(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: `${req.params.id} n'associe à aucun membre.` });
    res.json({ message: 'Membre mis à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMembre = async (req, res) => {
  try {
    const result = await Membre.deleteMembre(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: `${req.params.id} n'associe à aucun membre.` });
    res.json({ message: 'Membre supprimé.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMembres, getMembreById, createMembre, updateMembre, deleteMembre };
