import express from 'express';
const app = express();
const port = 8080;
app.listen(port, ()=>{
    console.log(`Server started successfully on http://localhost:${port}`);
});
app.get('/home', (req,res)=> {
    console.log(req.url);
    console.log(req.params);
    res.send("Hello World");
});
app.get('/:id', (req,res)=> {
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id);
});
// app.get('/:id/:email', (req,res)=> {
//     console.log(req.url);
//     console.log(req.params);
//     res.send(req.params.id + req.params.email);
// });
app.get('/:id1/:id2/', (req,res)=> {
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id1 + req.params.id2 );
});
// app.get('/:id/:id/:email/:email', (req,res)=> {
//     console.log(req.url);
//     console.log(req.params);
//     res.send(req.params.id + req.params.email);
// });