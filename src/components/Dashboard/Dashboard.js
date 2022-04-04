import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className='chart'>
            <div className='chart-left'>
                <div>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(25, 25, 112)' }}>Month wise Sell</h2>
                    <LineChart width={500} height={400} data={data}>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey={'month'} stroke='rgb(25, 25, 112)'></XAxis>
                        <Tooltip></Tooltip>
                        <Legend />
                        <YAxis></YAxis>
                    </LineChart>
                </div>
            </div>
            <div className='chart-right'>
                <div>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(25, 25, 112)' }}>Investment Vs Revenue</h2>
                    <BarChart width={500} height={400} data={data}>
                        <XAxis dataKey="month" stroke='rgb(25, 25, 112)' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="investment" stackId="a" fill="#1f77b4" barSize={30} />
                        <Bar dataKey="revenue" stackId="a" fill="#2ca02c" barSize={30} />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;