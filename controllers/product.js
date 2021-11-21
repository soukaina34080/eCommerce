const pool = require('../config/database');

module.exports.getProduct = async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('CALL afficherProduit()');
            console.log(result);
            return res.status(200).json({ success: result })
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    }