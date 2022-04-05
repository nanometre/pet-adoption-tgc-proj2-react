import React from "react";
import Carousel from "./home/Carousel";


export default function Home(props) {
    return (
        <React.Fragment>
            {/* call to action banner */}
            <Carousel />
            <div className="container-fluid">
                
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
                    <h3>Listed a pet before? You can manage your listings here.</h3>
                </div>
            </div>
        </React.Fragment>
    )
}