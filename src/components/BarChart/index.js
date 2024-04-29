import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import './index.css'

ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const BarChart = () => {
    const [selectedOption, setSelectedOption] = useState('first'); // State to store the selected option

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value); // Update selected option
    }

    // Define datasets for different options
    const firstData = {
        labels: ['Cooking', 'Playing', 'Sleep', 'Work', 'Charging'],
        datasets: [
            {
                data: [2, 4, 7, 8, 3],
                backgroundColor: 'aqua',
                borderColor: 'black'
            }
        ]
    }

    const secondData = {
        labels: ['Cooking', 'Playing', 'Sleep', 'Work', 'Charging'],
        datasets: [
            {
                data: [5, 3, 5, 8, 3],
                backgroundColor: 'aqua',
                borderColor: 'black'
            }
        ]
    }

    const thirdData = {
        labels: ['Cooking', 'Playing', 'Sleep', 'Work', 'Charging'],
        datasets: [
            {
                data: [4, 2, 6, 4, 8],
                backgroundColor: 'aqua',
                borderColor: 'black'
            }
        ]
    }

    // Select dataset based on the selected option
    let selectedData;
    switch (selectedOption) {
        case 'first':
            selectedData = firstData;
            break;
        case 'second':
            selectedData = secondData;
            break;
        case 'third':
            selectedData = thirdData;
            break;
        default:
            selectedData = firstData;
    }

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Modes',
                    color: 'red',
                    font: {
                        size: 20
                    }
                },
                grid: {
                    display: false
                }

            },

            y: {
                title: {
                    display: true,
                    text: 'Time',
                    color: 'red',
                    font: {
                        size: 20
                    }
                },
                ticks: {
                    max: 10
                },
                grid: {
                    display: false
                }

            }
        }

    }


    return (
        <div className='bar-chart-container-file'>
            <select value={selectedOption} className='dropdown-container-bar' onChange={handleOptionChange}>
                <option className='sective-dropdaown' value="first">Daily</option>
                <option className='sective-dropdaown' value="second">Monthly</option>
                <option className='sective-dropdaown' value="third">Yearly</option>
            </select>
            <div>
                <Bar data={selectedData} options={options}></Bar>
            </div>
        </div>
    )
}

export default BarChart;
