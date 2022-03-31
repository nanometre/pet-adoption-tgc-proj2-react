import React from 'react';
import axios from 'axios';
import ManageListingForm from './form/ManageListingForm';
import ManageUserListings from './manage/ManageUserListings';

export default class ManageAnimals extends React.Component {
    state = {
        loaded: false,
        userEmail: "",
        userListings: [],
        editAnimalDetails: {
            editId: "",
            editName: "",
            editSpecies: "",
            editBreed: "",
            editGender: "",
            editDateOfBirth: "",
            editStatusTags: [],
            editAdoptFoster: [],
            editDescription: "",
            editImgUrl: ""
        }
    }

    // function to store listings of a specific user
    storeUserListings = (listings) => {
        this.setState({
            userListings: listings,
            loaded: true
        })
    }

    // function to go back to re enter email
    reenterEmail = () => {
        this.setState({
            loaded: false,
            userEmail: ""
        })
    }

    // function for form fields 2 way binding
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateEditFormField = (evt) => {
        this.setState({
            editAnimalDetails: {
                ...this.state.editAnimalDetails,
                [evt.target.name]: evt.target.value
            }
        })
    }

    updateEditCheckbox = (evt) => {
        let key = evt.target.name
        if (this.state.editAnimalDetails[key].includes(evt.target.value)) {
            let indexToRemove = this.state.editAnimalDetails[key].findIndex((t) => t === evt.target.value)
            this.setState({
                editAnimalDetails: {
                    ...this.state.editAnimalDetails,
                    [key]: [...this.state.editAnimalDetails[key].slice(0, indexToRemove), ...this.state.editAnimalDetails[key].slice(indexToRemove + 1)]
                }
            })
        } else {
            this.setState({
                editAnimalDetails: {
                    ...this.state.editAnimalDetails,
                    [key]: [...this.state.editAnimalDetails[key], evt.target.value]
                }
            })
        }
    }

    // function to store orginal details of animal, which is currently being edited
    storeOriginalDetails = (animal) => {
        this.setState({
            editAnimalDetails: {
                editId: animal._id,
                editName: animal.name,
                editSpecies: animal.species.species_name,
                editBreed: animal.species.breed,
                editGender: animal.gender,
                editDateOfBirth: animal.date_of_birth.slice(0, 10),
                editStatusTags: animal.status_tags,
                editAdoptFoster: animal.adopt_foster,
                editDescription: animal.description,
                editImgUrl: animal.img_url
            }
        })
    }

    // function to delete animal listing 
    deleteAnimal = async (deleteAnimalId) => {
        await axios.delete(this.props.BASE_API_URL + "/" + deleteAnimalId)
        let updatedUserListings = this.state.userListings.filter(l => l._id !== deleteAnimalId)
        this.setState({
            userListings: updatedUserListings
        })
        this.props.processDeleteAnimal(deleteAnimalId)
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <h3>Manage Animal Listings</h3>
                    {this.state.loaded ?
                        <ManageUserListings BASE_API_URL={this.props.BASE_API_URL}
                            setActive={this.props.setActive}
                            updateEditFormField={this.updateEditFormField}
                            updateEditCheckbox={this.updateEditCheckbox}
                            storeOriginalDetails={this.storeOriginalDetails}
                            reenterEmail={this.reenterEmail}
                            deleteAnimal={this.deleteAnimal}
                            userListings={this.state.userListings}
                            userEmail={this.state.userEmail}
                            editAnimalDetails={this.state.editAnimalDetails} />
                        :
                        <ManageListingForm BASE_API_URL={this.props.BASE_API_URL}
                            animals={this.props.animals}
                            updateFormField={this.updateFormField}
                            setActive={this.props.setActive}
                            storeUserListings={this.storeUserListings}
                            userEmail={this.state.userEmail} />}
                </div>
            </React.Fragment>
        )
    }
}