
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: "Property search route with filters coming soon." });
});

module.exports = router;
