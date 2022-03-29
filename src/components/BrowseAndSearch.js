import React from "react"
import DisplayAnimalCard from "./card/DisplayAnimalCard"

export default class BrowseAndSearch extends React.Component {
    state = {
        results: this.props.animals 
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <h3>Browse and Search</h3>
                    <div className="d-flex flex-wrap justify-content-around">
                        {this.state.results.map((animal, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <DisplayAnimalCard i={i}
                                        animal={animal}
                                        setActive={this.props.setActive} />
                                </React.Fragment>)
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}