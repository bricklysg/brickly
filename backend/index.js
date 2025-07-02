
const express = require('express');
const app = express();
const propertyRoutes = require('./routes/properties');

app.use(express.json());
app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});



