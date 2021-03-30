import {get_items,add_item,delete_item,items_loading} from '../actions/types';
const initialState={
    items:[],
    loading:false
}

export default function(state=initialState, action){
    switch(action.type){
        case get_items:
            console.log(action.payload)
            console.log(state.items)
            //state.items=[action.payload]
           // console.log(items)
            return{
                ...state,
                items:action.payload,
                loading:false
                
            }
        case items_loading:
                return{
                    ...state,
                    loading:true
                }
        case delete_item:
                return{
                ...state,
                items:state.items.filter(item=>item._id!==action.payload)
                
                }
        case add_item:
            return{
            ...state,
            items:[action.payload, ...state.items]
            
            }
        default:
            return state;


    }

}