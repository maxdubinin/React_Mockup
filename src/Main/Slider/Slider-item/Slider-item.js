import React from "react";


const SliderItem = ({banner, ...rest}) => {
    const {textBold, text} = rest;
    return (
        <div className="slider__item">
                <div className="slider__figure ibg">
                    <img src={banner} alt="slide1" />
                </div>
                <div className="slider__container">
                    <div className="slider__block slider__row">
                        <div className="slider__body slider__column">
                            <div className="slider__title ">
                                <span className="slider__title--bold">{textBold}</span>{text}.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SliderItem; 

