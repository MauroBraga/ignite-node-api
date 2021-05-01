import express, { response } from 'express';

const app = express();

app.get("/", (req, resp) =>{
     return resp.json({message: "Hello World"});
})

app.listen(3333, () => console.log('Server is running'));