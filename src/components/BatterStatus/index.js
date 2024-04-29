import './index.css'
import { PiBatteryVerticalMediumBold } from "react-icons/pi";


const Battery = () => {
    return (
        <div className='main-battery-status-container'>
            <div className='heading-battery-status-container'>
                <h5 className='heading-battery-status'>Autonous robot 1</h5>
                <p className='about-battery-status'>From convey belt to charge station</p>
            </div>
            <div className='continaer-flexing-to-sides'>
                <div>
                    <span className='perfomance-indicates-numbers'>20%</span>
                    <p className='about-battery-status'>Battery Level</p>
                </div>
                <PiBatteryVerticalMediumBold className='icon-battery' />
            </div>
            <div className='continaer-flexing-to-sides'>
                <div>
                    <span className='perfomance-indicates-numbers '>56%</span>
                    <p className='about-battery-status'>Perfomance</p>
                </div>
                <div>
                    <span className='perfomance-indicates-numbers '>41%</span>
                    <p className='about-battery-status'>Under avg.</p>
                </div>
            </div>
            <div className='continaer-flexing-to-sides'>
                <div>
                    <span className='perfomance-indicates-numbers '>2.1h</span>
                    <p className='about-battery-status'>Total Hours</p>
                </div>
                <div>
                    <span className='perfomance-indicates-numbers '>1%</span>
                    <p className='about-battery-status'>Under avg.</p>
                </div>
            </div>
        </div>
    )
}

export default Battery