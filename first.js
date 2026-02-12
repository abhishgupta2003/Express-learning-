const express=require('express');
const app=express();    
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello World!  how are you  ');
});
app.get('/profile',(req,res)=>{
    res.send('Hello World!  profile created successfully by devseitch m ');
});
app.get('/photo',(req,res)=>{
    res.send('Hello World!  photo created successfully by temp');
});
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});