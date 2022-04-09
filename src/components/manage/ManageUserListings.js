import React from 'react'
import ManageAnimalAccordion from '../section/ManageAnimalAccordion'

export default function ManageUserListings(props) {
    const renderUserListings = () => {
        if (props.userListings.length === 0) {
            return (
                <div className="custom-form">
                    <form>
                        <p className='alert alert-danger'>No animal listing for '{props.userEmail}'.</p>
                        <p>Add an animal listing using this email or go back to the previous page.</p>
                        <div className='custom-btn-group'>
                            <button className="btn btn-primary custom-btn-primary"
                                onClick={() => props.setActive('addAnimal')}>
                                Add animal</button>
                            <button className="btn btn-secondary"
                                onClick={() => props.reenterEmail()}>
                                Back</button>
                        </div>
                    </form>
                </div>)
        } else {
            return (
                <div>
                    <p className='alert alert-success'>Showing {props.userListings.length} listing(s) for '{props.userEmail.toLowerCase()}'.</p>
                    <div className="accordion" id="accordionManage" >
                        {props.userListings.map((animal, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <ManageAnimalAccordion i={i}
                                        animal={animal}
                                        setActive={props.setActive}
                                        deleteAnimal={props.deleteAnimal}
                                        editAnimal={props.editAnimal}
                                        updateEditFormField={props.updateEditFormField}
                                        updateEditCheckbox={props.updateEditCheckbox}
                                        storeOriginalDetails={props.storeOriginalDetails}
                                        editAnimalDetails={props.editAnimalDetails}
                                        editValid={props.editValid}
                                        editFormIsValid={props.editFormIsValid} />
                                </React.Fragment>)
                        })}
                    </div>
                    <div className='custom-btn-group'>
                        <button className="btn btn-secondary"
                            onClick={() => props.reenterEmail()}>Back</button>
                    </div>
                </div>
            )
        }
    }

    return (renderUserListings())
}