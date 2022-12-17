const express=require('express');
const router=express.Router();

router.post('/',(req,res)=>{ 
    obj={
        requestJson:{
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile
        },
        response:{
            status:"success",
            code:"00",
            message:"Post request processed successfully."
        }
    }

    res.json(obj);

});

module.exports=router;