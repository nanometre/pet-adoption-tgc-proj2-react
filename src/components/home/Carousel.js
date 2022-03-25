import React from "react";

export default function Carousel() {
    return (
        <div id="carouselHome" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
            <div className="carousel-inner" data-bs-interval="5000">
                <div className="carousel-item active">
                    <img src={require('../../assets/images/carousel-img-1.jpg')} className="d-block w-100" alt="Puppy being petted" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={require('../../assets/images/carousel-img-2.jpg')} className="d-block w-100" alt="Lady carrying a dog" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={require('../../assets/images/carousel-img-3.jpg')} className="d-block w-100" alt="Boy petting a dog" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselHome" data-mdb-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselHome" data-mdb-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}