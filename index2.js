import express from 'express';
const app = express();
const port = 8081;
app.listen(port, ()=>{
    console.log(`Server started successfully on http://localhost:${port}`);
});
app.get('/home', (req,res)=> {
    console.log(req.url);
    res.send("This is the home page");
});