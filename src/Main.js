import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./components/Home"
import BrowseAndSearch from "./components/BrowseAndSearch";
import AddAnimal from "./components/AddAnimal";
import AdoptionProcess from "./components/AdoptionProcess";


class Main extends React.Component {
    BASE_API_URL = 'https://pet-adoption-tgc-proj2-express.herokuapp.com/'

    state = {
        animals: [],
        loaded: false,
        active: 'home'
    }

    async componentDidMount() {
        let response = await axios.get(this.BASE_API_URL + 'animals/show')
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
            return <BrowseAndSearch />
        } else if (this.state.active === 'addAnimal') {
            return <AddAnimal />
        } else if (this.state.active === 'adoptionProcess') {
            return <AdoptionProcess />
        }
    }

    setActive = (page) => {
        this.setState({
            active: page
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
