import React from 'react';
import axios from 'axios';
import ManageListingForm from './form/ManageListingForm';
import ManageUserListings from './manage/ManageUserListings';

export default class ManageAnimals extends React.Component {
    state = {
        loaded: false,
        userEmail: "",
        userListings: []
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

    // function to store listings of a specific user
    storeUserListings = (listings) => {
        this.setState({
            userListings: listings,
            loaded: true
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
                            reenterEmail={this.reenterEmail}
                            deleteAnimal={this.deleteAnimal}
                            userListings={this.state.userListings}
                            userEmail={this.state.userEmail} />
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