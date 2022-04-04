import React from "react";
import DisplayAnimalCard from "./card/DisplayAnimalCard";
import Carousel from "./home/Carousel";
import { shuffled } from "../utils";

export default function Home(props) {
    // get 4 random animal listings
    let shuffledSlicedArr = shuffled(props.animals).slice(0, 3)
    return (
        <React.Fragment>
            <div className="container-fluid">
                {/* call to action banner */}
                <div>
                    <Carousel />
                </div>
                {/* populate random animal listings and include button to browse more */}
                <div>
                    <h3>Meet some of our fur friends</h3>
                    <div className="d-flex flex-wrap justify-content-around">
                        {shuffledSlicedArr.map((animal, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <DisplayAnimalCard i={i}
                                        animal={animal}
                                        comments={props.comments}
                                        setActive={props.setActive}
                                        commentAnimalId={props.commentAnimalId}
                                        commentName={props.commentName}
                                        commentContent={props.commentContent}
                                        commentRating={props.commentRating} />
                                </React.Fragment>)
                        })}
                    </div>
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