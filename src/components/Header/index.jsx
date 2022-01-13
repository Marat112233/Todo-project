import React from 'react';
import "./styles.css";
import { NavLink } from "react-router-dom";

 const Header = (props) => {
    const classnames = ({ isActive }) => isActive ? "nav_item active" : "nav_item";
     const { logo} = props;
    return (
        <div className="header_block">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header_menu">
                <ul className='menu'>
                <NavLink className={classnames} to="/" >Home</NavLink>
                <NavLink className={classnames} to="/about" >About</NavLink>
                <NavLink className={classnames} to="/project">Project</NavLink>
                </ul>
            </div>
            <div className="register">
            <NavLink className={classnames} to='/register'>Register</NavLink>
            </div>
        </div>
    )
}
export default Header;