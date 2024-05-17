import React from 'react'
import '../../assets/css/dashboard.css';
import { useState } from 'react';
//import {BsCart3,BsFillBellFill,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill} from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line} from 'recharts';
function Dashmain()
{
  const [chartType, setChartType] = useState('bar');
    const data = [
        {
          name: 'Project1',
          work: 4000,
          completion: 2400,
          amt: 2400,
        },
        {
          name: 'Project2',
          work: 3000,
          completion: 1398,
          amt: 2210,
        },
        {
          name: 'Project3',
          work: 2000,
          completion: 9800,
          amt: 2290,
        },
        {
          name: 'Project4',
          work: 2780,
          completion: 3908,
          amt: 2000,
        },
        {
          name: 'Project5',
          work: 1890,
          completion: 4800,
          amt: 2181,
        },
        
      ];
      const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div>
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3 style={{"color":"black"}}>TOTAL VIEWS</h3>
           
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3 style={{"color":"black"}}>NEW ARTIST</h3>
           
          </div>
          <h1>520</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3 style={{"color":"black"}}>DOWNLOADS</h3>
            
          </div>
          <h1>82</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3 style={{"color":"black"}}>COLLABORATION PROJECT</h3>
            
          </div>
          <h1>416</h1>
        </div>
      </div>
      <div className='charts'>
        <div className='chart-toggle'>
          <label htmlFor="chartType">Select Chart Type:</label>
          <select id="chartType" value={chartType} onChange={handleChartTypeChange}>
            <option value="bar">Bar Chart</option>
            <option value="line">Line Chart</option>
          </select>
        </div>
        <div className='chart-container'>
        {chartType === 'bar' ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="work" fill="#8884d8" />
              <Bar dataKey="completion" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completion" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="work" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      </div>
    </main>
    </div>
  );
}

export default Dashmain;