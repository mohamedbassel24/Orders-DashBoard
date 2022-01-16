import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashBoard from './DashBoardComponent';
const data = [
  {
    name: 'Page ',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
class HomeComponent extends Component {
  static propTypes = {
    
        bookUrl: PropTypes.string

      
    }
    
    state = {
      responeObject : []
    }
  
    constructor(totalCount=0,averagePrice=0,noReturns=0){
      super();
    }
     getData() 
    {
      return fetch('orders.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      ).then(res => {

        return res.json()})
     }


    componentDidMount()
    {
      this.getData().then((fetchedData) => {
        console.log(fetchedData);
        
        console.log(fetchedData.filter((item)=> item.status ==='ORDERED' )) ;
        this.setState((currentState) => ({
          responeObject:fetchedData}))
      })

    }

    preProcessingData ()
    {
      const data = this.state.responeObject

      let data2Render = {} 
      // for each data time 
      // want to count for each state
      //"ORDERED"
      let uniqueState = {}
      for (let item of data)
      {

        const currDate = item.registered.substr(12,1);
        if (!uniqueState[item.status])
        {
          uniqueState[item.status]=1;
        }
        if (  data2Render[currDate])
        {
         /* if (data2Render[currDate][item.status])
          {
            data2Render[currDate][item.status]+=1;
          }
          else{
            data2Render[currDate][item.status]=1
          }*/
          data2Render[currDate]['Number of orders'] +=1
        }
        else
        {
          data2Render[currDate] = {}
          data2Render[currDate]['Number of orders'] = 1;
        }
      }

      const renderedArr = []
      const keys = Object.keys(data2Render)
      for (const key of keys)
      {
        data2Render[key].date= key
        renderedArr.push(data2Render[key])
      }
      console.log('Data = >',data2Render) 
      console.log('renderedArr =>',renderedArr) 
      this.matrixCalc()
      return renderedArr
    }

    matrixCalc()
    {// this matrix for calculating 
      const ordersData = this.state.responeObject
      this.totalCount = ordersData.length
      this.averagePrice = ordersData.reduce((prev, curr) => prev + Number(curr.price.substr(1).replace(',','')), 0) / ordersData.length;
      this.noReturns = ordersData.filter(order => order.status === 'RETURNED').length
      console.log('noTotal',this.totalCount,'\n average:' ,this.averagePrice ,'\n noReturns:' ,this.noReturns )
    }
    render() {
      console.log(data)
      this.preProcessingData ()
        return (
          <div>
         
        
          <LineChart
            width={500}
            height={300}
            data={this.preProcessingData()}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Line type="monotone" dataKey="Number of orders" stroke="#8884d8" activeDot={{ r: 8 }} />
         
          </LineChart>

            <DashBoard totalCount={this.totalCount} averagePrice={this.averagePrice} noReturns={this.noReturns}/>
        </div>
        )
          }
}

    
export default HomeComponent