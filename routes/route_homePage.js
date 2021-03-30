const express=require('express')
const router= express.Router();

const {getHomePage,getItems,addItem,deleteItem}=require('../controllers/homePage_controller');

router
    .route('/')
    .get(getHomePage);


router
    .route('/items')
    .get(getItems)
    .post(addItem)
router 
    .route('/:id')
    .delete(deleteItem)


module.exports=router;