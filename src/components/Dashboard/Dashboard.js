import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {

    const [data, setData] = useState([]);
    // console.log(data)

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
                        <YAxis></YAxis>
                    </LineChart>
                </div>
            </div>
            <div className='chart-right'>
                <div>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(25, 25, 112)' }}>Investment Vs Revenue</h2>
                    <BarChart width={590} height={400} data={data}>
                        <Bar dataKey="investment" fill="#8884d8" barSize={30} />
                        <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
                        <XAxis dataKey="month" stroke='rgb(25, 25, 112)' />
                        <Tooltip></Tooltip>
                        <YAxis />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;