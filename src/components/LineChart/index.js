import React, { useState } from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    Tooltip,
    Legend
} from 'chart.js';
import './index.css'

ChartJs.register(
    LinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const LineChart = () => {
    const [selectedOption, setSelectedOption] = useState('daily'); // State to store the selected option

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value); // Update selected option
    }

    // Define datasets for different options
    const dailyData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
            {
                label: 'Work Done',
                data: [1, 3, 2, 6, 7, 5, 4, 5, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    const weeklyData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
            {
                label: 'Work Done',
                data: [2, 4, 2, 4, 5, 6, 7, 6, 5],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            }
        ]
    }

    const yearlyData = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        datasets: [
            {
                label: 'Work Done',
                data: [1, 4, 2, 4, 6, 9, 3, 4, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            }
        ]
    }

    // Select dataset based on the selected option
    let selectedData;
    switch (selectedOption) {
        case 'daily':
            selectedData = dailyData;
            break;
        case 'weekly':
            selectedData = weeklyData;
            break;
        case 'yearly':
            selectedData = yearlyData;
            break;
        default:
            selectedData = dailyData;
    }

    const options = {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div className='main-line-container-adjustment'>
            <div>
            <select value={selectedOption} className='dropdown-container' onChange={handleOptionChange}>
                <option className='sective-dropdaown' value="daily">Daily</option>
                <option className='sective-dropdaown' value="weekly">Weekly</option>
                <option className='sective-dropdaown' value="yearly">Yearly</option>
            </select>
            </div>
            <Line data={selectedData} options={options}></Line>
        </div>
    )
}

export default LineChart;
