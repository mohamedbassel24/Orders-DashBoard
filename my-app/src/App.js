import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route , Link} from 'react-router-dom';
import HomeComponent from './components/HomeComponent'
function App() {
  return (

     
        <Route exact path='/' render={() => (
          <div>
            <h1>DashBoard</h1>
           
              <HomeComponent/>
            
            </div>
            
            )
        }></Route>)
}


export default App;
