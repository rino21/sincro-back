const Evenement = require('../models/evenement');

const getAllEvenements = async (req, res) => {
  try {
    const [rows] = await Evenement.getAllEvenements();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEvenementById = async (req, res) => {
  try {
    const [rows] = await Evenement.getEvenementById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Evenement not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEvenement = async (req, res) => {
  try {
    const result = await Evenement.createEvenement(req.body);
    res.status(201).json({ ev_id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEvenement = async (req, res) => {
  try {
    const result = await Evenement.updateEvenement(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Evenement not found' });
    res.json({ message: 'Evenement updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEvenement = async (req, res) => {
  try {
    const result = await Evenement.deleteEvenement(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Evenement not found' });
    res.json({ message: 'Evenement deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllEvenements, getEvenementById, createEvenement, updateEvenement, deleteEvenement };
