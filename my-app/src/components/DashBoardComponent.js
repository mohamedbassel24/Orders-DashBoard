import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class DashBoard extends Component {
  static propTypes = {
      totalCount: PropTypes.number,
      averagePrice: PropTypes.number,
      noReturns: PropTypes.number
    }
    render() {

        const {totalCount,averagePrice,noReturns} = this.props
        const mydata = []
        mydata.push({'xAxisValue':'Total Count','Value':totalCount})
        mydata.push({'xAxisValue':'Average Price','Value':averagePrice})
        mydata.push({'xAxisValue':'noReturns','Value':noReturns})
        
        return (
     
        <BarChart
          width={500}
          height={300}
          data={mydata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xAxisValue" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Value" fill="#394f51" />
        </BarChart>

    );
  }
}

    
export default DashBoard