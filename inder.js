// const express =require('express');
// const fs= require('fs');
// const app = express();
// app.get('/api/products',(req,res)=>{
//     let data = fs.readFileSync('./data.json',"utf8");
//      data =JSON.parse(data);
//     res.json({
//         status:"success",
//         data
//     });
// })
// app.listen(4001,(err)=>{
//     if(err) console.log(err.message);
//     else
//     console.log('server is running on port 4000');
// })


const express =require('express');
const fs=require('fs');
const app=express();
app.use(express.json());


app.use(express.json());
app.get('/api/products',async (req,res)=>{
    res.send('work in progress');


});
app.post('/api/products',async(req,res)=>{
    const data ={
        id:0,
        data:req.body

    }
    
    console.log(data);
    const db = await fs.readFileSync("./data.json","utf8");
    const arr=JSON.parse(db);
    const len =arr.length;
    if(len==0){
        data.id=1;
        console.log(arr)
        arr.push(data);
        console.log(arr)
    }
    res.send('work in progress');
});
app.listen(1401);
