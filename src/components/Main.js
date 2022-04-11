import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";
import Home from "./Home"
import BrowseAndSearch from "./BrowseAndSearch";
import AddAnimal from "./AddAnimal";
import AdoptionProcess from "./AdoptionProcess";
import ManageAnimals from "./ManageAnimals";
import '../assets/styles/page/main.css'


class Main extends React.Component {
    ANIMALS_API_URL = 'https://pet-adoption-tgc-proj2-express.herokuapp.com/animals'
    COMMENTS_API_URL = 'https://pet-adoption-tgc-proj2-express.herokuapp.com/comments'

    state = {
        animals: [],
        comments: [],
        loaded: false,
        active: 'home'
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    async componentDidMount() {
        let animalResponse = await axios.get(this.ANIMALS_API_URL)
        let commentResponse = await axios.get(this.COMMENTS_API_URL)
        document.title = "Paw Pals"
        this.setState({
            animals: animalResponse.data,
            comments: commentResponse.data,
            loaded: true
        })
    }

    // function for single page application
    renderPage = () => {
        if (this.state.loaded === false) {
            return <Loading />
        } else if (this.state.active === 'home') {
            return <Home setActive={this.setActive} />
        } else if (this.state.active === 'browse') {
            return <BrowseAndSearch ANIMALS_API_URL={this.ANIMALS_API_URL}
                COMMENTS_API_URL={this.COMMENTS_API_URL}
                animals={this.state.animals}
                comments={this.state.comments}
                setActive={this.setActive}
                processAddDeleteComment={this.processAddDeleteComment} />
        } else if (this.state.active === 'addAnimal') {
            return <AddAnimal ANIMALS_API_URL={this.ANIMALS_API_URL}
                setActive={this.setActive}
                processAddNewAnimal={this.processAddNewAnimal} />
        } else if (this.state.active === 'adoptionProcess') {
            return <AdoptionProcess />
        } else if (this.state.active === 'manageAnimals') {
            return <ManageAnimals ANIMALS_API_URL={this.ANIMALS_API_URL}
                animals={this.state.animals}
                setActive={this.setActive}
                processDeleteEditAnimal={this.processDeleteEditAnimal} />
        }
    }

    // function to set active page
    setActive = (page) => {
        this.setState({
            active: page
        })
    }

    // function to process add animal listing by updating main state
    processAddNewAnimal = async (newAnimal) => {
        let response = await axios.get(this.ANIMALS_API_URL)
        this.setState({
            animals: response.data,
            active: "browse"
        })
    }

    // function to process delete animal listing by updating main state
    processDeleteEditAnimal = async (deleteAnimalId) => {
        let response = await axios.get(this.ANIMALS_API_URL)
        this.setState({
            animals: response.data
        })
    }

    // function to process add comment by updating main state
    processAddDeleteComment = async () => {
        let response = await axios.get(this.COMMENTS_API_URL)
        this.setState({
            comments: response.data
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id='page' className='Main'>
                    <div id='nav'>
                        <Navbar setActive={this.setActive} />
                    </div>
                    <div id='content' className={this.state.loaded ? "" : "d-flex"} >
                        {this.renderPage()}
                    </div>
                    <div id='footer'>
                        <Footer />
                    </div>
                </div>
            </React.Fragment>)

    }
}

export default Main;
