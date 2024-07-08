const db = require('../db');

const getEmailMembre = (email) => db.query("SELECT * FROM Membre WHERE email = ?", [email]);
module.exports = { getEmailMembre };