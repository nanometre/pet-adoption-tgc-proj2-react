import React from 'react';
import { addAnimalSchema } from '../../validations'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import '../../assets/styles/form/form.css'

export default function AddAnimalForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(addAnimalSchema)
    })
    const submitForm = (data) => {
        props.addNewAnimal()
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center'>
            <h3>Add an animal for adoption or fostering!</h3>
            <div style={{ width: "60%" }}>
                <form onSubmit={handleSubmit(submitForm)}>
                    <h5>Animal's Details</h5>
                    <div>
                        <label>Name</label>
                        <input className="form-control"
                            type="text"
                            name="newName"
                            value={props.newName}
                            {...register("newName", { onChange: props.updateFormField })} />
                        <p className="form-error-message"> {errors.newName?.message} </p>
                    </div>
                    <div>
                        <div>
                            <label className="form-check-label" >Species</label>
                        </div>
                        <div>
                            <select className="form-select"
                                name="newSpecies"
                                onChange={props.updateFormField}
                                value={props.newSpecies}>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Hamster">Hamster</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Breed</label>
                        <input className="form-control"
                            type="text"
                            name="newBreed"
                            value={props.newBreed}
                            {...register("newBreed", { onChange: props.updateFormField })}
                        />
                        <p className="form-error-message"> {errors.newBreed?.message} </p>
                    </div>
                    <div>
                        <div>
                            <label className="form-check-label" >Gender</label>
                        </div>
                        <div>
                            <select className="form-select"
                                name="newGender"
                                onChange={props.updateFormField}
                                value={props.newGender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input className="form-control"
                            type="text"
                            name="newDateOfBirth"
                            value={props.newDateOfBirth}
                            placeholder="YYYY-MM-DD"
                            {...register("newDateOfBirth", { onChange: props.updateFormField })} />
                        <p className="form-error-message"> {errors.newDateOfBirth?.message} </p>
                    </div>
                    <div>
                        <div>
                            <label className="form-check-label" >Status Tags</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="HDB Approved"
                                onChange={props.updateCheckbox}
                                checked={props.newStatusTags.includes("HDB Approved")}
                                id="hdb-approved" />
                            <label className="form-check-label" htmlFor="hdb-approved">HDB Approved</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="Microchipped"
                                onChange={props.updateCheckbox}
                                checked={props.newStatusTags.includes("Microchipped")}
                                id="microchipped" />
                            <label className="form-check-label" htmlFor="microchipped">Microchipped</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="Sterilised"
                                onChange={props.updateCheckbox}
                                checked={props.newStatusTags.includes("Sterilised")}
                                id="sterilised" />
                            <label className="form-check-label" htmlFor="sterilised">Sterilised</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newStatusTags"
                                value="Vaccinated"
                                onChange={props.updateCheckbox}
                                checked={props.newStatusTags.includes("Vaccinated")}
                                id="vaccinated" />
                            <label className="form-check-label" htmlFor="vaccinated">Vaccinated</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="form-check-label" >Available for</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newAdoptFoster"
                                value="Adopt"
                                checked={props.newAdoptFoster.includes("Adopt")}
                                id="adopt"
                                {...register("newAdoptFoster", { onChange: props.updateCheckbox })} />
                            <label className="form-check-label" htmlFor="adopt">Adopt</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newAdoptFoster"
                                value="Foster"
                                checked={props.newAdoptFoster.includes("Foster")}
                                id="foster"
                                {...register("newAdoptFoster", { onChange: props.updateCheckbox })} />
                            <label className="form-check-label" htmlFor="foster">Foster</label>
                        </div>
                        <p className="form-error-message"> {errors.newAdoptFoster?.message} </p>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea className="form-control"
                            name="newDescription"
                            value={props.newDescription}
                            placeholder="Write a short description on the animal"
                            rows="5"
                            {...register("newDescription", { onChange: props.updateFormField })}></textarea>
                        <p className="form-error-message"> {errors.newDescription?.message} </p>
                    </div>
                    <div>
                        <label>Image URL of Animal</label>
                        <input className="form-control"
                            type="text"
                            name="newImgUrl"
                            value={props.newImgUrl}
                            {...register("newImgUrl", { onChange: props.updateFormField })} />
                        <p className="form-error-message"> {errors.newImgUrl?.message} </p>
                    </div>
                    <h5>Current Caretaker's Details</h5>
                    <div>
                        <label>Name</label>
                        <input className="form-control"
                            type="text"
                            name="newCaretakerName"
                            value={props.newCaretakerName}
                            placeholder="Name of individual or organisation"
                            {...register("newCaretakerName", { onChange: props.updateFormField })}
                        />
                        <p className="form-error-message"> {errors.newCaretakerName?.message} </p>
                    </div>
                    <div>
                        <label>Email</label>
                        <input className="form-control"
                            type="text"
                            name="newCaretakerEmail"
                            value={props.newCaretakerEmail}
                            {...register("newCaretakerEmail", { onChange: props.updateFormField })} />
                        <p className="form-error-message"> {errors.newCaretakerEmail?.message} </p>
                    </div>
                    <button className="btn btn-primary"
                        type="submit"
                    >Submit</button>
                    <button className="btn btn-secondary"
                        onClick={() => props.setActive('browse')}>Cancel</button>
                </form>
            </div>
        </div>
    )
}