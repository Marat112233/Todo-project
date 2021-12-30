import React from 'react';
import "./styles.css";


 const Title = (props) => {
     const {title, title_text} = props;
    return (
        <div className='title_block'>
            <h1>{title}</h1>
            <p>{title_text}</p>
        </div>
    )
}
export default Title;