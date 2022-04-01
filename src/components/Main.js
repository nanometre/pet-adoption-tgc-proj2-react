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
    BASE_API_URL = 'https://pet-adoption-tgc-proj2-express.herokuapp.com/animals'

    state = {
        animals: [],
        loaded: false,
        active: 'home'
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    async componentDidMount() {
        let response = await axios.get(this.BASE_API_URL)
        document.title = "Paw Pals"
        this.setState({
            animals: response.data,
            loaded: true
        })
    }

    // function for single page application
    renderPage = () => {
        if (this.state.loaded === false) {
            return <Loading />
        } else if (this.state.active === 'home') {
            return <Home animals={this.state.animals}
                setActive={this.setActive} />
        } else if (this.state.active === 'browse') {
            return <BrowseAndSearch BASE_API_URL={this.BASE_API_URL}
                animals={this.state.animals}
                setActive={this.setActive} />
        } else if (this.state.active === 'addAnimal') {
            return <AddAnimal BASE_API_URL={this.BASE_API_URL}
                setActive={this.setActive}
                processAddNewAnimal={this.processAddNewAnimal} />
        } else if (this.state.active === 'adoptionProcess') {
            return <AdoptionProcess />
        } else if (this.state.active === 'manageAnimals') {
            return <ManageAnimals BASE_API_URL={this.BASE_API_URL}
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

    // function to add animal listing to main state
    processAddNewAnimal = async (newAnimal) => {
        let response = await axios.get(this.BASE_API_URL)
        this.setState({
            animals: response.data,
            active: "browse"
        })
    }

    // function to delete animal listing from main state
    processDeleteEditAnimal = async (deleteAnimalId) => {
        let response = await axios.get(this.BASE_API_URL)
        this.setState({
            animals: response.data
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id='page'>
                    <div id='nav'>
                        <Navbar setActive={this.setActive} />
                    </div>
                    <div id='content'>
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
