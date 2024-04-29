import './index.css';

const Navbar = () => {
    const pageRefresh = () => {
        window.location.reload();
    }

    
    return(
        <div>
            <div className='nav-bar-main-container'>
                <div>
                    <h6 className='robo-heading-main'>Robotics</h6>
                </div>
                <div className='button-container'>
                    <button className='button-navbar'>Login</button>
                    <button className='button-navbar' onClick={pageRefresh}>Refresh</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;