import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../images/banner-img/banner1.png'
import Banner2 from '../../images/banner-img/banner2.png'
import Banner3 from '../../images/banner-img/banner3.png'
const Banner = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Efficient Software</h3>
                        <p>Complete your task efficiently</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Mobile Version</h3>
                        <p>Software performance is smoothg </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Control From Anywhere</h3>
                        <p>No matter where you are!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;