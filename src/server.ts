import express, { response } from 'express';

const app = express();

app.use(express.json())

app.get("/", (req, resp) =>{
     return resp.json({message: "Hello World"});
})

app.post("/courses", (req,res) =>{
     const { name } = req.body;
     return res.json({name})
})

app.listen(3333, () => console.log('Server is running'));