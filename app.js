const {pool} = require('./db.js');
const userRoutes = require('./routes/usersRoutes.js')
const roomsRoutes = require('./routes/roomsRoutes.js')
const cors = require('cors');
const express = require('express');

const app = express();
const port = 4008; 
app.use(cors());
app.use(express.json());

app.use('/user',userRoutes);
app.use('/rooms',roomsRoutes)

app.get('/shelters', async(req,res) => {
    const getshelters = await  pool.query('SELECT * FROM shelters').then(results => {return results.rows})
  if(getshelters){
     res.status(200).json(getshelters)
  } else {
    res.sendStatus(404)
  } 
});




// all other paths
app.all('*', (req, res)=>{
    res.send('Path does not exist')
});

app.listen(port, () => {
    console.log(`listening at port: ${port}`);
})

