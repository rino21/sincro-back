const Zones = require('../models/zones');

const getAllZones = async (req, res) => {
  try {
    const [rows] = await Zones.getAllZones();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getZoneById = async (req, res) => {
  try {
    const [rows] = await Zones.getZoneById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message:`Cette zone n'est pas encore enregistrée.` });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createZone = async (req, res) => {
  try {
    const result = await Zones.createZone(req.body);
    res.status(201).json({ message: `La zone : ${req.body.nom_zone} a été bien enregistrée.`});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateZone = async (req, res) => {
  try {
    const result = await Zones.updateZone(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Cette zone n'est pas encore enregistrée.` });
    res.json({ message: 'Zone mise à jour.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteZone = async (req, res) => {
  try {
    const result = await Zones.deleteZone(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: `Cette zone n'est pas encore enregistrée.` });
    res.json({ message: 'Zone supprimée.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllZones, getZoneById, createZone, updateZone, deleteZone };
