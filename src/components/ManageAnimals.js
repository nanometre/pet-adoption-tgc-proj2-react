import React from 'react';
import ManageListingForm from './form/ManageListingForm';

export default class ManageAnimals extends React.Component {
    state = {
        manageListingEmail: ""
    }

    // function to change active page
    setActive = (page) => {
        this.props.setActive(page)
    }

    // function for form fields 2 way binding
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <h3>Manage Animal Listings</h3>
                    <ManageListingForm updateFormField={this.updateFormField}
                        setActive={this.setActive}
                        manageListingEmail={this.state.manageListingEmail}/>
                </div>
            </React.Fragment>
        )
    }
}