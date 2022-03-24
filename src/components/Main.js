import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";
import Home from "./Home"
import BrowseAndSearch from "./BrowseAndSearch";
import AddAnimal from "./AddAnimal";
import AdoptionProcess from "./AdoptionProcess";


class Main extends React.Component {
    BASE_API_URL = 'https://pet-adoption-tgc-proj2-express.herokuapp.com/animals'

    state = {
        animals: [],
        loaded: false,
        active: 'home'
    }

    async componentDidMount() {
        let response = await axios.get(this.BASE_API_URL + '/show')
        this.setState({
            animals: response.data,
            loaded: true
        })
    }

    renderPage = () => {
        if (this.state.loaded === false) {
            return <Loading />
        } else if (this.state.active === 'home') {
            return <Home animals={this.state.animals}
                         setActive={this.setActive} />
        } else if (this.state.active === 'browse') {
            return <BrowseAndSearch animals={this.state.animals}
                                    setActive={this.setActive}/>
        } else if (this.state.active === 'addAnimal') {
            return <AddAnimal BASE_API_URL={this.BASE_API_URL}
                              setActive={this.setActive}
                              processAddNewAnimal={this.processAddNewAnimal}/>
        } else if (this.state.active === 'adoptionProcess') {
            return <AdoptionProcess />
        }
    }

    setActive = (page) => {
        this.setState({
            active: page
        })
    }

    processAddNewAnimal = (newAnimal) => {
        this.setState({
            animals: [...this.state.animals, newAnimal],
            active: "home"
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar setActive={this.setActive}/>
                {this.renderPage()}
                <Footer />
            </React.Fragment>)

    }
}

export default Main;
