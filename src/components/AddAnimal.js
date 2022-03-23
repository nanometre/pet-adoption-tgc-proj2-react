import React from 'react'
// import axios from 'axios'

export default class AddAnimal extends React.Component {
    // Double check this way of assigning is correct
    // BASE_API_URL = this.props.BASE_API_URL

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
        newCaretakerEmail: ""
    }

    renderForm = () => {
        return (
            <div className='container-fluid d-flex flex-column align-items-center'>
                <h3>Add Animal</h3>
                <div style={{ width: "60%" }}>
                    <h5>Animal's Details</h5>
                    <div>
                        <label>Name</label>
                        <input className="form-control"
                            type="text"
                            name="newName"
                            value={this.state.newName}
                            onChange={this.updateFormField} />
                    </div>
                    <div>
                        <div>
                            <label className="form-check-label" >Species</label>
                        </div>
                        <div>
                            <select class="form-select" name="newSpecies" onChange={this.updateFormField}>
                                <option value="Dog"
                                        selected={this.state.newSpecies === "Dog"}>Dog</option>
                                <option value="Cat"
                                        selected={this.state.newSpecies === "Cat"}>Cat</option>
                                <option value="Hamster"
                                        selected={this.state.newSpecies === "Hamster"}>Hamster</option>
                                <option value="Others"
                                        selected={this.state.newSpecies === "Others"}>Others</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Breed</label>
                        <input className="form-control"
                            type="text"
                            name="newBreed"
                            value={this.state.newBreed}
                            onChange={this.updateFormField} />
                    </div>
                    <div>
                        <div>
                            <label className="form-check-label" >Gender</label>
                        </div>
                        <div>
                            <select class="form-select" name="newGender" onChange={this.updateFormField}>
                                <option value="Male"
                                        selected={this.state.newGender === "Male"}>Male</option>
                                <option value="Female"
                                        selected={this.state.newGender === "Female"}>Female</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input className="form-control"
                            type="text"
                            name="newDateOfBirth"
                            value={this.state.newDateOfBirth}
                            onChange={this.updateFormField}
                            placeholder="YYYY-MM-DD" />
                    </div>
                    <div>
                        <div>
                            <label className="form-check-label" >Status Tags</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="H"
                                onChange={this.updateCheckbox}
                                checked={this.state.newStatusTags.includes("H")}
                                id="hdb-approved" />
                            <label className="form-check-label" for="hdb-approved">HDB Approved</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="M"
                                onChange={this.updateCheckbox}
                                checked={this.state.newStatusTags.includes("M")}
                                id="microchipped" />
                            <label className="form-check-label" for="microchipped">Microchipped</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="S"
                                onChange={this.updateCheckbox}
                                checked={this.state.newStatusTags.includes("S")}
                                id="sterilised" />
                            <label className="form-check-label" for="sterilised">Sterilised</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="V"
                                onChange={this.updateCheckbox}
                                checked={this.state.newStatusTags.includes("V")}
                                id="vaccinated" />
                            <label className="form-check-label" for="vaccinated">Vaccinated</label>
                        </div>
                    </div>
                    <div>
                        <label className="form-check-label" >Available for</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="checkbox"
                            name="newAdoptFoster"
                            value="Adopt"
                            onChange={this.updateCheckbox}
                            checked={this.state.newAdoptFoster.includes("Adopt")}
                            id="adopt" />
                        <label className="form-check-label" for="adopt">Adopt</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="checkbox"
                            name="newAdoptFoster"
                            value="Foster"
                            onChange={this.updateCheckbox}
                            checked={this.state.newAdoptFoster.includes("Foster")}
                            id="foster" />
                        <label className="form-check-label" for="foster">Foster</label>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea className="form-control"
                            name="newDescription"
                            value={this.state.newDescription}
                            onChange={this.updateFormField}
                            placeholder="Write a short description on the animal"
                            rows="5"></textarea>
                    </div>
                    <div>
                        <label>Image URL of Animal</label>
                        <input className="form-control"
                            type="text"
                            name="newImgUrl"
                            value={this.state.newImgUrl}
                            onChange={this.updateFormField} />
                    </div>
                    <h5>Current Caretaker's Details</h5>
                    <div>
                        <label>Name</label>
                        <input className="form-control"
                            type="text"
                            name="newCaretakerName"
                            value={this.state.newCaretakerName}
                            onChange={this.updateFormField}
                            placeholder="Name of individual or organisation" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input className="form-control"
                            type="text"
                            name="newCaretakerEmail"
                            value={this.state.newCaretakerEmail}
                            onChange={this.updateFormField} />
                    </div>
                </div>
            </div>
        )
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

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

    render() {
        return (
            <React.Fragment>
                {this.renderForm()}
            </React.Fragment>
        )
    }
}