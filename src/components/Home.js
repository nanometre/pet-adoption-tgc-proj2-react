import React from "react";
import DisplayAnimalCard from "./card/DisplayAnimalCard";
// import Carousel from "./home/Carousel";
import { shuffled } from "../utils";

export default function Home(props) {
    // get 4 random animal listings
    let shuffledSlicedArr = shuffled(props.animals).slice(0, 3)
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h3>Adopt an animal today and save a life!</h3>
                {/* To remove carousel? Or replace with a static image */}
                {/* <Carousel /> */}
                <h3>Meet some of our fur friends</h3>
                <div className="d-flex flex-wrap justify-content-around">
                    {shuffledSlicedArr.map((animal, i) => {
                        return (
                            <React.Fragment key={i}>
                                <DisplayAnimalCard i={i}
                                                   animal={animal}
                                                   setActive={props.setActive} />
                            </React.Fragment>)
                    })}
                </div>
                <button className="btn btn-primary"
                            onClick={()=>props.setActive('browse')}>Browse more animals here!</button>
            </div>
        </React.Fragment>
    )
}