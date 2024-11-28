const express=require('express');
const app=express();

const PORT=process.env.PORT??3000;

app.get('/',(req,res)=>{
    return res.json({message:'Hello from Express Server'});
});

app.listen(PORT,()=>console.log(`Server is runinng on PORT${PORT}`));