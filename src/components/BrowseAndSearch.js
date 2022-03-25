import React from "react"
import DisplayAnimalCard from "./card/DisplayAnimalCard"

export default function BrowseAndSearch(props) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h3>Browse and Search</h3>
                <div className="d-flex flex-wrap justify-content-around">
                    {props.animals.map((animal, i) => {
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