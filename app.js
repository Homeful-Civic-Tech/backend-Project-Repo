const {pool} = require('./db.js');
const userRoutes = require('./routes/usersRoutes.js')
const roomsRoutes = require('./routes/roomsRoutes.js')
const sheltersRoutes = require('./routes/sheltersRoutes.js')
const reservationsRoutes = require('./routes/reservationsRoutes')
const cors = require('cors');
const express = require('express');
const  reviewRoutes = require('./routes/reviewRoutes.js')
const app = express();
const port = 4009; 
app.use(cors());
app.use(express.json());

app.use('/user',userRoutes);
app.use('/rooms',roomsRoutes)
app.use('/shelters',sheltersRoutes)
app.use('/reservations', reservationsRoutes)
app.use('/reservations/:id', reservationsRoutes)
app.use('/shelters/:id',sheltersRoutes)
app.use('/reviews', reviewRoutes)


// app.get('/shelters/:id', async(req,res) => {
//     const id = req.params.id;
//     const get1shelter = await pool.query('SELECT * FROM shelters WHERE id = $1',[id]).then(results =>  {return results.rows[0]})
//   if(get1shelter){
//      res.status(200).json(get1shelter)
//   } else {
//     res.sendStatus(404)
//   } 
// });



// all other paths
app.all('*', (req, res)=>{
    res.send('Path does not exist')
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

