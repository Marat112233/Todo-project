import React from 'react';
import "./styles.css";

 const Card = (props) => {
     const { text, imageURL} = props;
    return (
        <div className='card_block'>
           <div className="card_image_block">

               <img src={imageURL} alt="img" />

            </div> 
            <div className="card_text_block">
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Card;