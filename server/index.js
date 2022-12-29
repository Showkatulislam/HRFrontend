const express=require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId=require('mongodb').ObjectId
const app=express()
const port=5000
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://doctordb:doctordb@cluster0.xhxaw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
       await client.connect()
       const Collection=client.db('nxgit')
       const EmployeeCollection=Collection.collection('datacollection')

       app.get('/employee',async(req,res)=>{
             const query={}
             const cursor=EmployeeCollection.find(query)
             const result=await cursor.toArray()
             res.send(result)
       })
/*        app.post('/employee',async(req,res)=>{
            const user=req.body
            console.log(user)
            const result=await EmployeeCollection.insertOne(user)
            res.send(result)
       }) */
/*         app.delete('/user/:id', async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        }) */
    }finally{

    }
}
run()

app.listen(port)