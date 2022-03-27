import React from 'react'
import ManageAnimalCard from '../card/ManageAnimalCard'

export default function ManageUserListings(props) {
    const renderUserListings = () => {
        if (props.userListings.length === 0) {
            return (
                <div>
                    <p>No animal listings for '{props.userEmail}'.</p>
                    <p>Add an animal listing using this email or go back to the previous page.</p>
                    <button className="btn btn-primary"
                        onClick={() => props.setActive('addAnimal')}>
                            Add animal</button>
                    <button className="btn btn-secondary"
                        onClick={() => props.setLoaded()}>
                            Back</button>
                </div>)
        } else {
            return (
                <div className="d-flex flex-wrap justify-content-around">
                    {props.userListings.map((animal, i) => {
                        return (
                            <React.Fragment key={i}>
                                <ManageAnimalCard animal={animal} i={i}
                                                   setActive={props.setActive} />
                            </React.Fragment>)
                    })}
                </div>
            )
        }
    }

    return (renderUserListings())
}