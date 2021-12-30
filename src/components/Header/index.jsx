import React from 'react';
import "./styles.css";

 const Header = (props) => {
     const { logo, home,portfolio,about} = props;
    return (
        <div className="header_block">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header_menu">
                <ul className='menu'>
                    <li className='row'><a href={home}>Home</a></li>
                    <li className='row'><a href={portfolio}>Portfolio</a></li>
                    <li className='row'><a href={about}>About me</a></li>

                </ul>
            </div>
        </div>
    )
}
export default Header;