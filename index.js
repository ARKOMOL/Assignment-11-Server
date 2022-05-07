const express = require('express');
const app = express()
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
// console.log(process.env)
const port = process.env.PORT || 5000;

//midlleware 
app.use(cors());
app.use(express.json());

/* ==============Cluster Connected========================== */

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s8dpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s8dpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const uri = "mongodb+srv://CarDb:klly2ROL6iHF3uCM@cluster0.s8dpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     console.log('db is connnented');
//     client.close(); 
//   });

async function run(){
try{
    // console.log('object');
    await client.connect();
    const carCollection =client.db("carWarehouse").collection("warehouseProducts");

    app.get('/inventory',async(req,res)=>{
        const query = {};
        const cursor = carCollection.find(query);
        const products = await cursor.toArray();
        res.send(products);
    })
}
finally{

}

}
run().catch(console.dir)





/* ========================================================= */


app.get('/',(req,res)=>{
    res.send('Server is runnig')
})


app.listen(port,()=>{
    console.log('Server is running in ',port);
})


