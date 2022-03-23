import React from 'react'
// import axios from 'axios'

export default class AddAnimal extends React.Component {
    // Double check this way of assigning is correct
    // BASE_API_URL = this.props.BASE_API_URL

    state = {
        newName: "",
        newImgUrl: "",
        newGender: "",
        newDateOfBirth: "",
        newSpecies: "",
        newBreed: "",
        newDescription: ""
    }

    renderForm = () => {
        return (
            <div className='container-fluid d-flex flex-column align-items-center'>
                <h3>Add Animal</h3>
                <div style={{ width: "60%" }}>
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
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="newSpecies"
                                value="Dog"
                                onChange={this.updateFormField}
                                checked={this.state.newSpecies === "Dog"} />Dog
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="newSpecies"
                                value="Cat"
                                onChange={this.updateFormField}
                                checked={this.state.newSpecies === "Cat"} />Cat
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="newSpecies"
                                value="Hamster"
                                onChange={this.updateFormField}
                                checked={this.state.newSpecies === "Hamster"} />Hamster
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="newSpecies"
                                value="Others"
                                onChange={this.updateFormField}
                                checked={this.state.newSpecies === "Others"} />Others
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
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="newGender"
                                value="Male"
                                onChange={this.updateFormField}
                                checked={this.state.newGender === "Male"} />Male
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="newGender"
                                value="Female"
                                onChange={this.updateFormField}
                                checked={this.state.newGender === "Female"} />Female
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Date of Birth</label>
                            <input className="form-control"
                                type="text"
                                name="newDateOfBirth"
                                value={this.state.newDateOfBirth}
                                onChange={this.updateFormField} 
                                placeholder="YYYY-MM-DD"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Description</label>
                            <textarea className="form-control"
                                name="newDescription"
                                value={this.state.newDescription}
                                onChange={this.updateFormField}
                                placeholder="Write a short description on the animal"
                                rows="5"></textarea>
                        </div>
                    </div>
                    <div>
                        <label>Image URL of Animal</label>
                        <input className="form-control"
                            type="text"
                            name="newImgUrl"
                            value={this.state.newImgUrl}
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

    render() {
        return (
            <React.Fragment>
                {this.renderForm()}
            </React.Fragment>
        )
    }
}