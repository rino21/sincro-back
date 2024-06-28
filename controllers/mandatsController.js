const Mandats = require('../models/mandats');

const getAllMandats = async (req, res) => {
  try {
    const [rows] = await Mandats.getAllMandats();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMandatByIds = async (req, res) => {
  try {
    const [rows] = await Mandats.getMandatByIds(req.params.membre_id, req.params.fonction_id);
    if (rows.length === 0) return res.status(404).json({ message: 'Mandat not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMandat = async (req, res) => {
  try {
    const result = await Mandats.createMandat(req.body);
    res.status(201).json({ message: `Mandat de membre N°: ${req.body.membre_id} a été enregistré.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMandat = async (req, res) => {
  try {
    const result = await Mandats.updateMandat(req.params.membre_id, req.params.fonction_id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Mandat not found' });
    res.json({ message: 'Mandat mis à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMandat = async (req, res) => {
  try {
    const result = await Mandats.deleteMandat(req.params.membre_id, req.params.fonction_id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Mandat not found' });
    res.json({ message: 'Mandat supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMandats, getMandatByIds, createMandat, updateMandat, deleteMandat };
