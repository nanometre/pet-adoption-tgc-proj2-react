import React from 'react'
import ManageAnimalCard from '../card/ManageAnimalCard'

export default function ManageUserListings(props) {
    const renderUserListings = () => {
        if (props.userListings.length === 0) {
            return (
                <div>
                    <p className='alert alert-danger'>No animal listings for '{props.userEmail}'.</p>
                    <p>Add an animal listing using this email or go back to the previous page.</p>
                    <button className="btn btn-primary"
                        onClick={() => props.setActive('addAnimal')}>
                        Add animal</button>
                    <button className="btn btn-secondary"
                        onClick={() => props.reenterEmail()}>
                        Back</button>
                </div>)
        } else {
            return (
                <div>
                    <p className='alert alert-success'>Showing listing(s) for '{props.userEmail}'.</p>
                    <div className="accordion" id="accordionManage">
                        {props.userListings.map((animal, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <ManageAnimalCard i={i}
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
                    <button className="btn btn-secondary"
                        onClick={() => props.reenterEmail()}>Back</button>
                </div>
            )
        }
    }

    return (renderUserListings())
}