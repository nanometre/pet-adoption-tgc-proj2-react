import React from 'react'
import axios from 'axios'
import AddAnimalForm from './form/AddAnimalForm'
import "../assets/styles/page/add-animal.css"

export default class AddAnimal extends React.Component {
    state = {
        newName: "",
        newImgUrl: "",
        newGender: "Male",
        newDateOfBirth: "",
        newSpecies: "Dog",
        newBreed: "",
        newDescription: "",
        newStatusTags: [],
        newAdoptFoster: [],
        newCaretakerName: "",
        newCaretakerEmail: "",
        addValid: false
    }

    // function for form fields 2 way binding
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    // function for checkboxes 2 way binding
    updateCheckbox = (evt) => {
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
    }

    addFormIsValid = () => {
        this.setState({
            addValid: true
        })
    }

    // post request to backend server
    addNewAnimal = async () => {
        let newAnimal = {
            "name": this.state.newName,
            "img_url": this.state.newImgUrl,
            "gender": this.state.newGender,
            "date_of_birth": this.state.newDateOfBirth,
            "species": {
                "species_name": this.state.newSpecies,
                "breed": this.state.newBreed
            },
            "description": this.state.newDescription,
            "status_tags": this.state.newStatusTags,
            "adopt_foster": this.state.newAdoptFoster,
            "current_caretaker": {
                "caretaker_name": this.state.newCaretakerName,
                "email": this.state.newCaretakerEmail
            }
        }
        await axios.post(this.props.ANIMALS_API_URL, newAnimal)
        await this.props.processAddNewAnimal(newAnimal)
    }

    render() {
        return (
            <React.Fragment>
                <img src={require('../assets/images/add-animal-img.jpg')} 
                    alt="Puppy in shelter" 
                    style={{width: "100vw", height: "50vh", objectFit: "cover"}}/>
                <div className='container-fluid content-container'>
                    <div className='add-content'>
                        <h3>Add an animal for adoption or fostering</h3>
                        <p>Listing your animal on our website helps to reach a greater audience pool and increasing the chances of them finding their furever home!</p>
                        <AddAnimalForm updateFormField={this.updateFormField}
                            updateCheckbox={this.updateCheckbox}
                            addNewAnimal={this.addNewAnimal}
                            setActive={this.props.setActive}
                            newName={this.state.newName}
                            newImgUrl={this.state.newImgUrl}
                            newGender={this.state.newGender}
                            newDateOfBirth={this.state.newDateOfBirth}
                            newSpecies={this.state.newSpecies}
                            newBreed={this.state.newBreed}
                            newDescription={this.state.newDescription}
                            newStatusTags={this.state.newStatusTags}
                            newAdoptFoster={this.state.newAdoptFoster}
                            newCaretakerName={this.state.newCaretakerName}
                            newCaretakerEmail={this.state.newCaretakerEmail}
                            addValid={this.state.addValid}
                            addFormIsValid={this.addFormIsValid}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}