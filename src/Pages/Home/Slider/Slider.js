import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div id='slider' className='my-5'>
            <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg' className="d-block " alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src='https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2020/09/27/sajek_valley_d.jpg?itok=cjxU-QOL' className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='https://blog.flyticket.com.bd/wp-content/uploads/2019/06/st-martin-island-1-1.jpg' className="d-block " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;