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
                {/* add animal up for adoption and foster */}
                <div>

                </div>
                {/* adoption process */}
                <div>

                </div>
                {/* manage listings if you are existing user */}
                <div>

                </div>
            </div>
        </React.Fragment>
    )
}