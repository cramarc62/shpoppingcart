import React, { Component } from 'react'
import {connect} from 'react-redux';
import{getItems, deleteItems} from '../actions/itemActions';
import PropTypes from'prop-types'
import {Item} from './Item'

class Allitems extends Component {
    componentDidMount(){
        this.props.getItems();
        this.props.deleteItems();
    }
    render() {
        
        //const {items}=this.props.item;
        //console.log(items);
        //console.log(this.props.item.items.data)
        return (
            <div>
                <ul>
                {this.props.item.items.map(item=>(
                    // <Item key={item.id} item={item.name}/>
                    <li>
                        {item.item_name}
                        <button className="remove-btn" color="danger" onClick={(e)=>{this.props.deleteItems(item._id)}}>
                            Delete
                        </button>
                    </li>

                ))}
                </ul>
                This  is All Items Page
            </div>
            
        )
    }
}
Allitems.propTypes={
    getItems: PropTypes.func.isRequired,
    item:PropTypes.object.isRequired,
    deleteItems: PropTypes.func.isRequired    
}
const mapStateToProps=(state)=>({
    item:state.item
})
export default  connect(mapStateToProps,{getItems,deleteItems})(Allitems);