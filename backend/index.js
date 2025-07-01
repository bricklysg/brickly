
const express = require('express');
const app = express();
const propertyRoutes = require('./routes/properties');

app.use(express.json());
app.use('/api/properties', propertyRoutes);

app.listen(3001, () => console.log('Backend running on port 3001'));
