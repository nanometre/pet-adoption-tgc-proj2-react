import React from "react";
import axios from "axios";
import DisplayAnimalCard from "./card/DisplayAnimalCard";
import SearchForm from "./form/SearchForm";

export default class BrowseAndSearch extends React.Component {
    state = {
        searchResults: this.props.animals,
        searchInput: "",
        searchGender: [],
        searchSpecies: [],
        searchStatusTags: [],
        searchFosterAdopt: [],
        searchAgeGte: "",
        searchAgeLte: ""
    }

    // function for form fields 2 way binding
    updateFormField = async (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        await setTimeout(function () { }, 1000)
        await this.getSearchResults()
    }

    // function for checkboxes 2 way binding
    updateCheckbox = async (evt) => {
        let key = evt.target.name
        if (this.state[key].includes(evt.target.value)) {
            let indexToRemove = this.state[key].findIndex((t) => t === evt.target.value)
            this.setState({
                [key]: [...this.state[key].slice(0, indexToRemove), ...this.state[key].slice(indexToRemove + 1)]
            })
        } else {
            this.setState({
                [key]: [...this.state[key], evt.target.value]
            })
        }
        await setTimeout(function () { }, 1000)
        await this.getSearchResults()
    }

    // function to get search results
    getSearchResults = async () => {
        let response = await axios.post(this.props.BASE_API_URL + '/search', {
            searchterm: this.state.searchInput,
            gender: this.state.searchGender,
            gteyear: this.state.searchAgeGte,
            lteyear: this.state.searchAgeLte,
            species_name: this.state.searchSpecies,
            status_tags: this.state.searchStatusTags,
            adopt_foster: this.state.searchFosterAdopt
        })
        this.setState({
            searchResults: response.data
        })
    }

    renderResults = () => {
        if (this.state.searchResults.length !== 0) {
            return (
                <div className="d-flex flex-wrap justify-content-around">
                    {this.state.searchResults.map((animal, i) => {
                        return (
                            <React.Fragment key={i}>
                                <DisplayAnimalCard i={i}
                                    animal={animal}
                                    setActive={this.props.setActive} />
                            </React.Fragment>)
                    })}
                </div>
            )
        } else {
            return (
                <div>No results found</div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <h3>Browse all of our fur friends here!</h3>
                    <SearchForm updateFormField={this.updateFormField}
                        updateCheckbox={this.updateCheckbox}
                        searchInput={this.state.searchInput}
                        searchGender={this.state.searchGender}
                        searchSpecies={this.state.searchSpecies}
                        searchStatusTags={this.state.searchStatusTags}
                        searchFosterAdopt={this.state.searchFosterAdopt}
                        searchAgeGte={this.state.searchAgeGte}
                        searchAgeLte={this.state.searchAgeLte} />
                    {this.renderResults()}
                </div>
            </React.Fragment>
        )
    }
}