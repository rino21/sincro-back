// const Rapport = require('../models/rapport');

// const getAllRapports = async (req, res) => {
//   try {
//     const [rows] = await Rapport.getAllRapports();
//     res.json(rows);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getRapportById = async (req, res) => {
//   try {
//     const [rows] = await Rapport.getRapportById(req.params.id);
//     if (rows.length === 0) return res.status(404).json({ message: 'Rapport not found' });
//     res.json(rows[0]);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createRapport = async (req, res) => {
//   try {
//     const result = await Rapport.createRapport(req.body);
//     res.status(201).json({ rapport_id: result.insertId });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateRapport = async (req, res) => {
//   try {
//     const result = await Rapport.updateRapport(req.params.id, req.body);
//     if (result.affectedRows === 0) return res.status(404).json({ message: 'Rapport not found' });
//     res.json({ message: 'Rapport updated' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteRapport = async (req, res) => {
//   try {
//     const result = await Rapport.deleteRapport(req.params.id);
//     if (result.affectedRows === 0) return res.status(404).json({ message: 'Rapport not found' });
//     res.json({ message: 'Rapport deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { getAllRapports, getRapportById, createRapport, updateRapport, deleteRapport };

const Rapport = require('../models/rapport');
const Fichiers = require('../models/fichiers');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Specify the file name
  }
});

const upload = multer({ storage: storage });

const getAllRapports = async (req, res) => {
  try {
    const [rows] = await Rapport.getAllRapports();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRapportById = async (req, res) => {
  try {
    const [rows] = await Rapport.getRapportById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Rapport not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRapport = async (req, res) => {
  try {
    const rapport = {
      title: req.body.title,
      description: req.body.description,
      membre_id: req.body.membre_id
    };
    
    const rapportResult = await Rapport.createRapport(rapport);
    const rapp_id = rapportResult[0].insertId
    if (req.files) {
      const fichiers = req.files.map(file => ({
        lien_fichier: file.path, // Save the file path in the database
        rapp_id
      }));
      await Fichiers.createFichiers(fichiers);
    }

    res.status(201).json({ rapp_id});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRapport = async (req, res) => {
  try {
    const rapport = {
      title: req.body.title,
      description: req.body.description,
      membre_id: req.body.membre_id
    };

    const rapportResult = await Rapport.updateRapport(req.params.id, rapport);

    if (rapportResult.affectedRows === 0) return res.status(404).json({ message: 'Rapport not found' });

    if (req.files) {
      const fichiers = req.files.map(file => ({
        lien_fichier: file.path, // Update the file path in the database
        rapp_id: req.params.id
      }));
      await Fichiers.updateFichiers(req.body.fichiers_id, fichiers);
    }

    res.json({ message: 'Rapport updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRapport = async (req, res) => {
  try {
    const result = await Rapport.deleteRapport(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Rapport not found' });
    res.json({ message: 'Rapport deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllRapports, getRapportById, createRapport, updateRapport, deleteRapport, upload };
