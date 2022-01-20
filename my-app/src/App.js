import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent'
import HeaderComponent from'./components/HeaderComponent'
import DashBoard from './components/DashBoardComponent';


let totalCount=0,averagePrice=0,noReturns=0;
function getData(argTotalCount,argAveragePrice,argNoTotal)
{
  totalCount=argTotalCount;
  averagePrice=argAveragePrice;
  noReturns=argNoTotal;
}
function App() {
  return (

     <div>
       <HeaderComponent/>
        <Route exact path='/' render={() => (
          <div>

                <br/>
                <br/>
              <HomeComponent statsData ={getData} />
            
            </div>
    
            )
        }></Route>
         <Route  path='/stats' render={() => (
          <div>
            
           
            <DashBoard totalCount={totalCount} averagePrice={averagePrice} noReturns={noReturns}/>
            
            </div>
    
            )
        }></Route>
        </div>)
}


export default App;
