import React from 'react';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 const Header = (props) => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    
    return (
        <div className='header_block'>
            
            <FontAwesomeIcon icon={faCoffee} size="6x" />
            
            <p>aaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
    )
}
export default Header;