const express = require('express');
const app = express()
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;

//midlleware 
app.use(cors());
app.use(express.json());

/* ==============Cluster Connected========================== */


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wtxlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
try{

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


