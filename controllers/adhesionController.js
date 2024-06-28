const Adhesion = require('../models/adhesion');

const getAllAdhesions = async (req, res) => {
  try {
    const [rows] = await Adhesion.getAllAdhesions();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdhesionByIds = async (req, res) => {
  try {
    const [rows] = await Adhesion.getAdhesionByIds(req.params.club_id, req.params.membre_id);
    if (rows.length === 0) return res.status(404).json({ message: 'Adhesion not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAdhesion = async (req, res) => {
  try {
    const result = await Adhesion.createAdhesion(req.body);
    res.status(201).json({ message: 'Adhesion created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdhesion = async (req, res) => {
  try {
    const result = await Adhesion.deleteAdhesion(req.params.club_id, req.params.membre_id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Adhesion not found' });
    res.json({ message: 'Adhesion deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllAdhesions, getAdhesionByIds, createAdhesion, deleteAdhesion };
