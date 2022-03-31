import React from 'react';
import { editListingSchema } from '../../validations';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import '../../assets/styles/form/form.css';

export default function EditListingForm(props) {
    return (
        <div>
            {/* animal name input */}
            <div>
                <label>Name</label>
                <input className="form-control"
                    type="text"
                    // name="newName"
                    value={props.animal.name}
                // {...register("newName", { onChange: props.updateFormField })} 
                />
                {/* <p className="form-error-message"> {errors.newName?.message} </p> */}
            </div>
            {/* animal species input */}
            <div>
                <div>
                    <label>Species</label>
                </div>
                <div>
                    <select className="form-select"
                        // name="newSpecies"
                        // onChange={props.updateFormField}
                        value={props.animal.species.species_name}>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Hamster">Hamster</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>
            {/* animal breed input */}
            <div>
                <label>Breed</label>
                <input className="form-control"
                    type="text"
                    // name="newBreed"
                    value={props.animal.species.breed}
                // {...register("newBreed", { onChange: props.updateFormField })}
                />
                {/* <p className="form-error-message"> {errors.newBreed?.message} </p> */}
            </div>
            {/* animal gender input */}
            <div>
                <div>
                    <label>Gender</label>
                </div>
                <div>
                    <select className="form-select"
                        // name="newGender"
                        // onChange={props.updateFormField}
                        value={props.animal.gender}>
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
                    // name="newDateOfBirth"
                    value={props.animal.date_of_birth.slice(0, 10)}
                    placeholder="YYYY-MM-DD"
                // {...register("newDateOfBirth", { onChange: props.updateFormField })} 
                />
                {/* <p className="form-error-message"> {errors.newDateOfBirth?.message} </p> */}
            </div>
            {/* animal status tag input */}
            <div>
                <div>
                    <label className="form-check-label" >Status Tags</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        // name="newStatusTags"
                        value="HDB Approved"
                        // onChange={props.updateCheckbox}
                        checked={props.animal.status_tags.includes("HDB Approved")}
                        id="hdb-approved" />
                    <label className="form-check-label" htmlFor="hdb-approved">HDB Approved</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        // name="newStatusTags"
                        value="Microchipped"
                        // onChange={props.updateCheckbox}
                        checked={props.animal.status_tags.includes("Microchipped")}
                        id="microchipped" />
                    <label className="form-check-label" htmlFor="microchipped">Microchipped</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        // name="newStatusTags"
                        value="Sterilised"
                        // onChange={props.updateCheckbox}
                        checked={props.animal.status_tags.includes("Sterilised")}
                        id="sterilised" />
                    <label className="form-check-label" htmlFor="sterilised">Sterilised</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        // name="newStatusTags"
                        value="Vaccinated"
                        // onChange={props.updateCheckbox}
                        checked={props.animal.status_tags.includes("Vaccinated")}
                        id="vaccinated" />
                    <label className="form-check-label" htmlFor="vaccinated">Vaccinated</label>
                </div>
            </div>
            {/* adopt and foster input */}
            <div>
                <div>
                    <label className="form-check-label" >Available for</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        // name="newAdoptFoster"
                        value="Adopt"
                        checked={props.animal.adopt_foster.includes("Adopt")}
                        id="adopt"
                        // {...register("newAdoptFoster", { onChange: props.updateCheckbox })} 
                        />
                    <label className="form-check-label" htmlFor="adopt">Adopt</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        // name="newAdoptFoster"
                        value="Foster"
                        checked={props.animal.adopt_foster.includes("Foster")}
                        id="foster"
                        // {...register("newAdoptFoster", { onChange: props.updateCheckbox })} 
                        />
                    <label className="form-check-label" htmlFor="foster">Foster</label>
                </div>
                {/* <p className="form-error-message"> {errors.newAdoptFoster?.message} </p> */}
            </div>
            {/* description input */}
            <div>
                <label>Description</label>
                <textarea className="form-control"
                    // name="newDescription"
                    value={props.animal.description}
                    placeholder="Write a short description on the animal"
                    rows="5"
                    // {...register("newDescription", { onChange: props.updateFormField })}
                    ></textarea>
                {/* <p className="form-error-message"> {errors.newDescription?.message} </p> */}
            </div>
            {/* image url input */}
            <div>
                <label>Image URL of Animal</label>
                <input className="form-control"
                    type="text"
                    // name="newImgUrl"
                    value={props.animal.img_url}
                    // {...register("newImgUrl", { onChange: props.updateFormField })} 
                    />
                {/* <p className="form-error-message"> {errors.newImgUrl?.message} </p> */}
            </div>
        </div>
    )
}