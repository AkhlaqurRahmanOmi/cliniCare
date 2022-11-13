import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';


import connectDB from './config/db.js';
import routePatient from './routes/patient.js';


connectDB()
const app= express();


app.get('/', function(req, res){
    res.send('App is available')
})


app.use('/patient',routePatient);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

















// const CONNECTION_URL ='mongodb+srv://omi:omi123456@clinicare.w0wcwlv.mongodb.net/test'
// const PORT = process.env.PORT||5000;

// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true})
//     .then(() => app.listen(PORT,() => console.log("server listening on port")))
//     .catch((error) => console.error(error.message));
// app.listen(PORT,console.log('Server running '+process.env.NODE_ENV+ 'in port '+PORT));