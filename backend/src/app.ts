import dotenv from 'dotenv';
dotenv.config();


import express from "express";
import cors from "cors";
import path from "path";
import vaseRouter from './routes/vase.route';
import { vasedbConnect } from './configs/database.config';

//connect to mongodb atlas
vasedbConnect();

const app = express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


app.use('/api/vases',vaseRouter);
/*app.use('/', (req, res)=>{
    res.send({message: "Welcome to the Full MEAN Stack Test!"})
});*/

app.use(express.static('public'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log("server is running on http://localhost:" + port);
}) 