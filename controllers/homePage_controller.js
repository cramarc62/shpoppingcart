const Items= require('../models/Items') 

exports.getHomePage=(req,res,next)=>{
    res.send('homepage controller')
}
exports.getItems=async (req,res,next)=>{
    try {
        const items=await Items.find();
        //console.log(items)
        //console.log(res.json({data:items}))
        return res.json({
            data:items
        })
    } catch (error) {
        
    }
}
exports.addItem=async (req,res,next)=>{
    try{
        //console.log(req.body.item_name)
        let item=new Items({
            item_name:req.body.item_name
        })
        
        await item.save();
        //console.log("inside add iyem")
        //console.log(item)
        res.send({
            data:item
        });

    }
    catch(error){

    }
}
exports.deleteItem=async (req,res,next)=>{
    try{
        
        //console.log(req.params)
        let item=Items.findById(req.params.id)
        
        await item.remove();
        //console.log("inside add iyem")
        //console.log(item)
        res.send({
            //data:item
        });

    }
    catch(error){

    }
}