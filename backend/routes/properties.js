const express = require('express');
const router = express.Router();
const pool = require('../db'); // ← connects to PostgreSQL

// GET /api/properties → return all listings
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM properties ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
