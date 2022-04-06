import React from 'react';
import { addAnimalSchema } from '../../validations'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import '../../assets/styles/form/form.css'
import '../../assets/styles/section/modal.css'

export default function AddAnimalForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(addAnimalSchema)
    })
    const submitForm = (data) => {
        props.addFormIsValid()
        props.addNewAnimal()
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center'>
            <div className='custom-form'>
                <form onSubmit={handleSubmit(submitForm)}>
                    {/* animal details */}
                    <h5>Animal's Details</h5>
                    {/* animal name input */}
                    <div>
                        <label>Name</label>
                        <input className="form-control"
                            type="text"
                            name="newName"
                            value={props.newName}
                            {...register("newName", { onChange: props.updateFormField })} />
                        {errors.newName ? <span className="form-error-message"> {errors.newName?.message} </span> : null}
                    </div>
                    {/* animal species input */}
                    <div>
                        <label>Species</label>
                        <select className="form-select form-control"
                            name="newSpecies"
                            onChange={props.updateFormField}
                            value={props.newSpecies}>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Hamster">Hamster</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    {/* animal breed input */}
                    <div>
                        <label>Breed</label>
                        <input className="form-control"
                            type="text"
                            name="newBreed"
                            value={props.newBreed}
                            {...register("newBreed", { onChange: props.updateFormField })}
                        />
                        {errors.newBreed ? <span className="form-error-message"> {errors.newBreed?.message} </span> : null}
                    </div>
                    {/* animal gender input */}
                    <div>
                        <label>Gender</label>
                        <div>
                            <select className="form-select form-control"
                                name="newGender"
                                onChange={props.updateFormField}
                                value={props.newGender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    {/* animal date of birth input */}
                    <div>
                        <label>Date of Birth</label>
                        <input className="form-control"
                            type="text"
                            name="newDateOfBirth"
                            value={props.newDateOfBirth}
                            placeholder="YYYY-MM-DD"
                            {...register("newDateOfBirth", { onChange: props.updateFormField })} />
                        {errors.newDateOfBirth ? <span className="form-error-message"> {errors.newDateOfBirth?.message} </span> : null}
                    </div>
                    {/* animal status tag input */}
                    <div>
                        <label className="form-check-label d-block" >Status Tags</label>
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
                    {/* adopt and foster input */}
                    <div>
                        <label className="form-check-label d-block" >Available for</label>
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
                        {errors.newAdoptFoster ? <span className="form-error-message"> {errors.newAdoptFoster?.message} </span> : null}
                    </div>
                    {/* description input */}
                    <div>
                        <label>Description</label>
                        <textarea className="form-control"
                            name="newDescription"
                            value={props.newDescription}
                            placeholder="Write a short description on the animal"
                            rows="5"
                            {...register("newDescription", { onChange: props.updateFormField })}></textarea>
                        {errors.newDescription ? <span className="form-error-message"> {errors.newDescription?.message} </span> : null}
                    </div>
                    {/* image url input */}
                    <div>
                        <label>Image URL of Animal</label>
                        <input className="form-control"
                            type="text"
                            name="newImgUrl"
                            value={props.newImgUrl}
                            {...register("newImgUrl", { onChange: props.updateFormField })} />
                        {errors.newImgUrl ? <span className="form-error-message"> {errors.newImgUrl?.message} </span> : null}
                        {props.newImgUrl ? <img src={props.newImgUrl}
                            alt="Rendered from URL"
                            className='img-url-rendered' /> : null}
                    </div>
                    {/* caretaker details */}
                    <h5>Current Caretaker's Details</h5>
                    {/* caretaker name input */}
                    <div>
                        <label>Name</label>
                        <input className="form-control"
                            type="text"
                            name="newCaretakerName"
                            value={props.newCaretakerName}
                            placeholder="Name of individual or organisation"
                            {...register("newCaretakerName", { onChange: props.updateFormField })}
                        />
                        {errors.newCaretakerName ? <span className="form-error-message"> {errors.newCaretakerName?.message} </span> : null}
                    </div>
                    {/* caretaker email input */}
                    <div>
                        <label>Email</label>
                        <input className="form-control"
                            type="text"
                            name="newCaretakerEmail"
                            value={props.newCaretakerEmail}
                            {...register("newCaretakerEmail", { onChange: props.updateFormField })} />
                        {errors.newCaretakerEmail ? <span className="form-error-message"> {errors.newCaretakerEmail?.message} </span> : null}
                    </div>
                    {props.addValid ? <div className='alert alert-success'>Animal successful added. Redirecting to Browse page.</div> : null}
                    <div className='custom-btn-group'>
                        {/* submit button */}
                        <button className="btn btn-primary"
                            type="submit"
                        >Add</button>
                        {/* button to trigger cancel modal */}
                        <button className="btn btn-secondary"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#cancelAddModal">Cancel</button>
                    </div>
                    {/* cancel modal */}
                    <div className="modal fade" id="cancelAddModal" data-bs-backdrop="static" data-bs-keyboard="false">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="cancelAddModalLabel">Discard changes?</h5>
                                    <button type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Discard changes and head to browse page?
                                </div>
                                <div className="modal-footer">
                                    <button type="button"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                        onClick={() => props.setActive('browse')}>Discard changes</button>
                                    <button type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal">Cancel</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}