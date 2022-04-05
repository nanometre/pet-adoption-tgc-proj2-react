import React from "react";
import Carousel from "./home/Carousel";


export default function Home(props) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                {/* call to action banner */}
                <div>
                    <Carousel />
                </div>
                {/* browse more all animal listings*/}
                <div>
                    <h3>Meet some of our fur friends</h3>
                    <button className="btn btn-primary"
                        onClick={() => props.setActive('browse')}>Browse more animals here!</button>
                </div>
                {/* adoption process */}
                <div>
                    <h3>Our adoption process</h3>
                </div>
                {/* add animal up for adoption and foster */}
                <div>
                    <h3>Have a pet you would like to put up for adoption or fostering? Add them here!</h3>
                </div> 
                {/* manage listings if you are existing user */}
                <div>
                    <h3>If you have listed a pet before, you can manage your listings here.</h3>
                </div>
            </div>
        </React.Fragment>
    )
}