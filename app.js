const {pool} = require('./db.js');
const userRoutes = require('./routes/routes.js')
const cors = require('cors');
const express = require('express');

const app = express();
const port = 4008; 
app.use(cors());
app.use(express.json());

app.use('/user',userRoutes);


app.listen(port, () => {
    console.log(`listening at port: ${port}`);
})

