import React from "react";
import DisplayAnimalCard from "./card/DisplayAnimalCard";
import Carousel from "./home/Carousel";
import { shuffled } from "../utils";

export default function Home(props) {
    // get 4 random animal listings
    let shuffledSlicedArr = shuffled(props.animals).slice(0, 4)
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h3>Adopt an animal today and save a life!</h3>
                <Carousel />
                <div className="d-flex flex-wrap justify-content-around">
                    {shuffledSlicedArr.map((animal, i) => {
                        return (
                            <React.Fragment key={i}>
                                <DisplayAnimalCard animal={animal} i={i} />
                            </React.Fragment>)
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}