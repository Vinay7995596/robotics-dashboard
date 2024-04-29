import React, { useState } from 'react';
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJs,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';
import './index.css'

ChartJs.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const PieChart = () => {
    const [selectedOption, setSelectedOption] = useState('first'); // State to store the selected option

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value); // Update selected option
    }

    // Define datasets for different options
    const firstData = {
        labels: ['Coding', 'Debugging', 'Designing', 'Research'],
        datasets: [
            {
                label: '# working',
                data: [20, 30, 50, 10],
                backgroundColor: [
                    'red',
                    'blue',
                    'green',
                    'yellow',
                ]
            }
        ]
    }

    const secondData = {
        labels: ['Coding', 'Debugging', 'Designing', 'Research'],
        datasets: [
            {
                label: '# working',
                data: [30, 40, 20, 10],
                backgroundColor: [
                    'red',
                    'blue',
                    'green',
                    'yellow',
                ]
            }
        ]
    }

    const thirdData = {
        labels: ['Coding', 'Debugging', 'Designing', 'Research'],
        datasets: [
            {
                label: '# working',
                data: [10, 10, 50, 30],
                backgroundColor: [
                    'red',
                    'blue',
                    'green',
                    'yellow',
                ]
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

    return (
        <div className='main-pie-container-adjustment'>
            <select value={selectedOption} className='dropdown-container' onChange={handleOptionChange}>
                <option className='sective-dropdaown' value="first">Daily</option>
                <option className='sective-dropdaown' value="second">Monthly</option>
                <option className='sective-dropdaown' value="third">Yearly</option>
            </select>
            <div>
                <Pie data={selectedData}></Pie>
            </div>
        </div>
    )
}

export default PieChart;
