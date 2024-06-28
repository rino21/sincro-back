const Fichiers = require('../models/fichiers');

const getAllFichiers = async (req, res) => {
  try {
    const [rows] = await Fichiers.getAllFichiers();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFichierById = async (req, res) => {
  try {
    const [rows] = await Fichiers.getFichierById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Fichier not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFichier = async (req, res) => {
  try {
    const result = await Fichiers.createFichier(req.body);
    res.status(201).json({ fichier_id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFichier = async (req, res) => {
  try {
    const result = await Fichiers.updateFichier(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Fichier not found' });
    res.json({ message: 'Fichier updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFichier = async (req, res) => {
  try {
    const result = await Fichiers.deleteFichier(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Fichier not found' });
    res.json({ message: 'Fichier deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllFichiers, getFichierById, createFichier, updateFichier, deleteFichier };
