// controllers/fonctionController.js
const Fonction = require('../models/fonctions');

const getAllFonctions = async (req, res) => {
  try {
    const [rows] = await Fonction.getAllFonctions();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFonctionById = async (req, res) => {
  try {
    const [rows] = await Fonction.getFonctionById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: `Cette fonction n'est pas encore enregistré.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFonction = async (req, res) => {
  try {
    const result = await Fonction.createFonction(req.body);
    res.status(201).json({ message: `La fonction : ${req.body.titre} a été bien enregistrée.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFonction = async (req, res) => {
  try {
    const result = await Fonction.updateFonction(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Cette fonction n'est pas encore enregistré.`});
    res.json({ message: 'Fonction mise à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFonction = async (req, res) => {
  try {
    const result = await Fonction.deleteFonction(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Cette fonction n'est pas encore enregistré.` });
    res.json({ message: 'Fonction supprimée.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllFonctions, getFonctionById, createFonction, updateFonction, deleteFonction };
