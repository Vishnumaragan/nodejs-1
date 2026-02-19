import express from 'express';
const app = express();
const port = 8080;
app.listen(port, ()=>{
    console.log(`Server started successfully on http://localhost:${port}`);
});
app.get('/', (req,res)=> {
    console.log(req.url);
    res.send("Hey this is my first server !!!");
});
app.get('/home', (req,res)=> {
    console.log(req.url);
    res.send("This is the home page");
});
app.get('/home/page1', (req,res)=> {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log(req.headers.authorization);
    res.send("This is the home/page1");
});