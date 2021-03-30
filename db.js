const mongoose=require('mongoose');

const connectDB= async ()=>{
    try {
        const conn= await mongoose.connect('mongodb://localhost/shoppingCartDB');
        console.log(`mongoDB connected to ${conn.connection.host}`)
    } catch (error) {
        console.log(`error:${error.message} `)
    }
}

module.exports=connectDB;