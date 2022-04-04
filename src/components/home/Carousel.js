import React from "react";
import "../../assets/styles/page/home.css"

export default function Carousel() {
    return (
        <div id="carouselHome" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-img-container carousel-inner">
                <div id="callout"> Save a life, adopt a pet today! </div>
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={require('../../assets/images/carousel-img-1.jpg')} className="d-block carousel-img" alt="Lady carrying dog" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={require('../../assets/images/carousel-img-2.jpg')} className="d-block carousel-img" alt="Puppy being petted" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    )
}