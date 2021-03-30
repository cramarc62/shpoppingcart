const mongoose = require('mongoose');

const ItemSchema= new mongoose.Schema({
    item_name:{
        type:String,
        required:true
    },
    item_amount:{
        type:Number,
        default:1,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});

module.exports= mongoose.model('Items',ItemSchema)