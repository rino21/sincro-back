const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
require("dotenv").config()
const path = require('path');

const app = express();
app.use(cors({"origin": "*"}))
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importer et monter les routes
const membreRoutes = require('./routes/membre')
const fonctionRoutes = require('./routes/fonctions')
const districtsRoutes = require('./routes/districts');
const regionsRoutes = require('./routes/regions');
const paysRoutes = require('./routes/pays');
const zonesRoutes = require('./routes/zones');
const clubsRoutes = require('./routes/clubs');
const adhesionRoutes = require('./routes/adhesion');
const mandatsRoutes = require('./routes/mandats');
const evenementRoutes = require('./routes/evenement');
const tachesRoutes = require('./routes/taches');
const rapportRoutes = require('./routes/rapport');
const fichiersRoutes = require('./routes/fichiers');
const auth = require('./routes/auth')
const historique = require('./routes/historique')

// Utilisation des routes
app.use('/auth', auth);
app.use('/historique', historique)
app.use('/membres', membreRoutes);
app.use('/fonctions', fonctionRoutes);
app.use('/districts', districtsRoutes);
app.use('/regions', regionsRoutes);
app.use('/pays', paysRoutes);
app.use('/zones', zonesRoutes);
app.use('/clubs', clubsRoutes);
app.use('/adhesion', adhesionRoutes);
app.use('/mandats', mandatsRoutes);
app.use('/evenement', evenementRoutes);
app.use('/taches', tachesRoutes);
app.use('/rapport', rapportRoutes);
app.use('/fichiers', fichiersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
