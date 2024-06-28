const Pays = require('../models/pays');

const getAllPays = async (req, res) => {
  try {
    const [rows] = await Pays.getAllPays();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaysById = async (req, res) => {
  try {
    const [rows] = await Pays.getPaysById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: `Ce pays n'est pas encore enregistré.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPays = async (req, res) => {
  try {
    const result = await Pays.createPays(req.body);
    res.status(201).json({ message: `Le pays : ${req.body.nom_pays} a été bien enregistré.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePays = async (req, res) => {
  try {
    const result = await Pays.updatePays(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Ce pays n'est pas encore enregistré.` });
    res.json({ message: 'Le pays mis à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePays = async (req, res) => {
  try {
    const result = await Pays.deletePays(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Ce pays n'est pas encore enregistré.` });
    res.json({ message: 'Pays supprimé.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllPays, getPaysById, createPays, updatePays, deletePays };
