import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import './App.css';

import {Provider} from 'react-redux';
import store from './Store'
import ShoppingcartHome from './Components/ShoppingcartHome'
import Appnavbar from './Components/Appnavbar'
import Allitems from './Components/Allitems'

import {Container}  from 'reactstrap'
import ItemModal from './Components/ItemModal'

class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
        
          <Appnavbar/>
          <Container>
          <ItemModal/>
          <Switch>
            <Route exact path="/home" component={ShoppingcartHome}/>
            <Route exact path="/allitems" component={Allitems}/>
          </Switch>
       </Container>
      
      </Router>
      
      </Provider>
    )
  }
}


export default App;
