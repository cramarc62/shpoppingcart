import {get_items,add_item,delete_item,items_loading} from './types';
import axios from 'axios'

export const getItems=()=>dispatch=>{
    dispatch(itemsLoading());
    axios
    .get('/homepage/items')
    .then(res=>{
        console.log(res.data.data);
            dispatch({
                type:get_items,
                payload:res.data.data
            })
    })
    
    
}
export const deleteItems=(id)=>dispatch=>{
    console.log(id)
    axios.delete(`/homepage/${id}`).then(res=>dispatch({
        type:delete_item,
        payload:id
    }))
    
}

export const addItem=item=>dispatch=>{
    console.log(item);
    axios.post('/homepage/items',item).then(res=>dispatch({
        type:add_item,
        payload: res.data.data
    }))
}
export const itemsLoading=()=>{
    return{
        type:items_loading
    };
}

