import React, { useState } from 'react';
import './carousel.css';

function Carousel(props) {

    const [ imgNumber, setImgNumber ] = useState(0)
    return (

        <div class="carousel-backdrop">

            <div className="close-button" onClick={props.closeCarousel}>X</div>

            <div className="carousel-wrapper">

                <img className="carousel-image" src={props.images[imgNumber].href} />

                <div className="pip-wrapper">
                    {props.images.map((img, index) => {
                        return (<div key={index} className={imgNumber === index ? "pip active" : "pip"} onClick={() => {
                            setImgNumber(index)}}
                        ></div>)
                    } )}
                </div>
                
            </div>


        </div>
        
        )
        

};

export default Carousel