import "./Slider.scss";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";
import { useState } from "react";


function Slider({ pictures }) {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
    const maxSilde = pictures.length;

    function toggleSlide(direction, slideNumber) {

        setCurrentSlideNumber(slideNumber);

        if (direction === 'left' && slideNumber === 0) {
            setCurrentSlideNumber(maxSilde);
        }

        if (direction === 'right' && slideNumber > maxSilde) {
            setCurrentSlideNumber(1);
        }
    }


    return (
        <div className="slider">
            <img src={pictures[currentSlideNumber - 1]} alt="imag" className="slider__img" />
            {
                maxSilde > 1 && (
                    <div className="slider__btns">
                        <button className="slider__btn__left"
                            onClick={() => { toggleSlide("left", currentSlideNumber - 1); }} >
                            <img src={left} alt="btn left" />
                        </button>
                        <button className="slider__btn__right"
                            onClick={() => { toggleSlide("right", currentSlideNumber + 1); }}>
                            <img src={right} alt="btn right" />
                        </button>
                    </div>
                )
            }


            {

                maxSilde > 1 && (
                    <div className="slider__number">
                        {currentSlideNumber}/{maxSilde}
                    </div>
                )
            }

        </div>
    );
}



export default Slider;
