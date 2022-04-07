import React from "react";
import "../assets/styles/page/home.css"

export default function Home(props) {
    return (
        <React.Fragment>
            {/* banner */}
            <div className="banner-container">
                {/* banner image */}
                <img src={require("../assets/images/banner-img.jpg")} alt="Cat in animal shelter" />
                {/* call to action and browse more all animal listings*/}
                <div id="callout">
                    <h1>Save a life, adopt a pet today!</h1>
                    <h4>Meet some of our fur friends</h4>
                    <button className="btn btn-primary"
                        onClick={() => props.setActive('browse')}>Browse</button>
                </div>
            </div>

            <div id="home-content" className="container-fluid">
                {/* adoption process */}
                <div className="home-content-block">
                    <h3>Interested in adopting?</h3>
                    <p>Learn more about our adoption process.</p>
                    <img src={require("../assets/images/info-bw.png")} alt="Info"/>
                    <button className="btn btn-primary"
                        onClick={() => props.setActive('adoptionProcess')}>Learn more</button>
                </div>
                {/* add animal up for adoption and foster */}
                <div className="home-content-block">
                    <h3>Putting up animals for adoption or fostering?</h3>
                    <p>Add your animals to our website to increase their chance of finding a furever home.</p>
                    <img src={require("../assets/images/add-bw.png")} alt="Add"/>
                    <button className="btn btn-primary"
                        onClick={() => props.setActive('addAnimal')}>Add animal</button>
                </div>
                {/* manage listings if you are existing user */}
                <div className="home-content-block">
                    <h3>Listed an animal with us before?</h3>
                    <p>Manage your listings here.</p>
                    <img src={require("../assets/images/list-bw.png")} alt="List"/>
                    <button className="btn btn-primary"
                        onClick={() => props.setActive('manageAnimals')}>Manage Listings</button>
                </div>
            </div>
        </React.Fragment>
    )
}