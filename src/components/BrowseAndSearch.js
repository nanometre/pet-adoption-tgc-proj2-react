import React from "react";
import axios from "axios";
import DisplayAnimalCard from "./section/DisplayAnimalCard";
import SearchForm from "./form/SearchForm";
import "../assets/styles/page/browse-and-search.css"

export default class BrowseAndSearch extends React.Component {
    state = {
        searchResults: this.props.animals,
        searchInput: "",
        searchGender: [],
        searchSpecies: [],
        searchStatusTags: [],
        searchFosterAdopt: [],
        searchAgeGte: "",
        searchAgeLte: "",
        commentName: "",
        commentContent: "",
        commentRating: '3',
        commentValid: false
    }

    // function for comment form fields 2 way binding
    updateCommentFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            commentValid: false
        })
    }

    // function for search form fields 2 way binding
    updateSearchFormField = async (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        await setTimeout(() => { this.getSearchResults() }, 1000)
    }

    // function for search checkboxes 2 way binding
    updateSearchCheckbox = async (evt) => {
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
        await setTimeout(() => { this.getSearchResults() }, 1000)
    }

    // function to get search results
    getSearchResults = async () => {
        let response = await axios.get(this.props.ANIMALS_API_URL + '/search', {
            params: {
                searchterm: this.state.searchInput,
                gender: this.state.searchGender,
                gteyear: this.state.searchAgeGte,
                lteyear: this.state.searchAgeLte,
                species_name: this.state.searchSpecies,
                status_tags: this.state.searchStatusTags,
                adopt_foster: this.state.searchFosterAdopt
            }
        })
        this.setState({
            searchResults: response.data
        })
    }

    commentFormIsValid = () => {
        this.setState({
            commentValid: true
        })
    }

    // function to post new comments
    postComment = async (animal_id, commentDetails) => {
        this.setState({
            commentName: "",
            commentContent: "",
            commentRating: '3',
        })
        await axios.post(this.props.COMMENTS_API_URL + "/" + animal_id, commentDetails)
        this.props.processAddComment()
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
                                    comments={this.props.comments}
                                    setActive={this.props.setActive}
                                    postComment={this.postComment}
                                    updateCommentFormField={this.updateCommentFormField}
                                    commentName={this.state.commentName}
                                    commentContent={this.state.commentContent}
                                    commentRating={this.state.commentRating}
                                    commentValid={this.state.commentValid}
                                    commentFormIsValid={this.commentFormIsValid} />
                            </React.Fragment>)
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid content-container">
                    <div className="browse-content row">
                        <h3 style={{marginBottom: '1rem'}}>Browse all of our fur friends here</h3>
                        <div className="col-lg-3 col-xxl-2">
                            <SearchForm updateSearchFormField={this.updateSearchFormField}
                                updateSearchCheckbox={this.updateSearchCheckbox}
                                searchInput={this.state.searchInput}
                                searchGender={this.state.searchGender}
                                searchSpecies={this.state.searchSpecies}
                                searchStatusTags={this.state.searchStatusTags}
                                searchFosterAdopt={this.state.searchFosterAdopt}
                                searchAgeGte={this.state.searchAgeGte}
                                searchAgeLte={this.state.searchAgeLte}
                                searchResults={this.state.searchResults} />
                        </div>
                        <div className="col-lg-9 col-xxl-10 search-result-container">
                            {this.renderResults()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}