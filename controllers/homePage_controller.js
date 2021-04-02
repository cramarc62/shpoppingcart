const Items= require('../Models/Items') 

exports.getHomePage=(req,res,next)=>{
    res.send('homepage controller')
}
exports.getItems=async (req,res,next)=>{
    try {
        console.log(req.body)
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
        console.log(req.body)
        let item=new Items({
            item_name:req.body.item_name
        })
        console.log("inside 1add iyem")
        await item.save();
        console.log("inside add iyem")
        //console.log(item)
        res.send({
            data:item
        });

    }
    catch(error){
        console.log(error)
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