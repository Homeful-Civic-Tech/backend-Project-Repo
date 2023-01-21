require("dotenv").config();
const { pool } = require('./db.js');
const userRoutes = require('./routes/usersRoutes.js');
const roomsRoutes = require('./routes/roomsRoutes.js');
const sheltersRoutes = require('./routes/sheltersRoutes.js');
const reservationsRoutes = require('./routes/reservationsRoutes');

const cors = require('cors');
const express = require('express');
const app = express();
const port = prosses.env.PORT || 4009;
app.use(cors());
app.use(express.json());

app.use('/user',userRoutes);
app.use('/rooms',roomsRoutes);
app.use('/shelters',sheltersRoutes);
app.use('/reservations', reservationsRoutes);





app.all('*', (req, res) => {
    res.send('Path does not exist')
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

