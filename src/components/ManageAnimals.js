import React from 'react';
import ManageListingForm from './form/ManageListingForm';
import ManageUserListings from './manage/ManageUserListings';

export default class ManageAnimals extends React.Component {
    state = {
        loaded: false,
        userEmail: "",
        userListings: []
    }

    // function to change active page
    setActive = (page) => {
        this.props.setActive(page)
    }

    // function to go back to re enter email
    setLoaded = () => {
        this.setState({
            loaded: false
        })
    }

    // function for form fields 2 way binding
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    storeUserListings = (listings) => {
        this.setState({
            userListings: listings,
            loaded: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <h3>Manage Animal Listings</h3>
                    {this.state.loaded ?
                        <ManageUserListings BASE_API_URL={this.props.BASE_API_URL}
                            setActive={this.setActive}
                            setLoaded={this.setLoaded}
                            userListings={this.state.userListings}
                            userEmail={this.state.userEmail} />
                        :
                        <ManageListingForm animals={this.props.animals}
                            updateFormField={this.updateFormField}
                            setActive={this.setActive}
                            storeUserListings={this.storeUserListings}
                            userEmail={this.state.userEmail} />}
                </div>
            </React.Fragment>
        )
    }
}