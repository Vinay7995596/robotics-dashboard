import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './index.css'
ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
)

const ArcCircle = () => {
    const data = {
        labels : ['Arm1 Energy Consumption'],

    datasets : [
        {
            labels : ['Arm2 Energy Consumption'],
            data : [74, 26],
            backgroundColor : ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 1)'],
            borderColor : ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 1)']
        }
    ]
    }

    const data2 = {
        labels : ['Arm2 Energy Consumption'],

    datasets : [
        {
            labels : ['Arm2 Energy Consumption'],
            data : [67, 33],
            backgroundColor : ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 1)'],
            borderColor : ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 1)']
        }
    ]
    }

    const options = {

    }

    const options2 ={

    }
    return(
        <div className="archElement-container ">
            <Doughnut classNameclassName="archElement-container" data={data} options={options} className="container-acr-element">
            </Doughnut>
            <Doughnut classNameclassName="archElement-container" data={data2} options={options2} className="container-acr-element"></Doughnut>

        </div>
    )
}

export default ArcCircle