import React from 'react';
import { editListingSchema } from '../../validations';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import '../../assets/styles/form/form.css';

export default function EditListingForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(editListingSchema),
        defaultValues: {
            editName: props.editAnimalDetails.editName,
            editSpecies: props.editAnimalDetails.editSpecies,
            editBreed: props.editAnimalDetails.editBreed,
            editGender: props.editAnimalDetails.editGender,
            editDateOfBirth: props.editAnimalDetails.editDateOfBirth,
            editStatusTags: props.editAnimalDetails.editStatusTags,
            editAdoptFoster: props.editAnimalDetails.editAdoptFoster,
            editDescription: props.editAnimalDetails.editDescription,
            editImgUrl: props.editAnimalDetails.editImgUrl
        }
    })
    const submitForm = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {/* animal name input */}
            <div>
                <label>Name</label>
                <input className="form-control"
                    type="text"
                    name="editName"
                    value={props.editAnimalDetails.editName}
                    {...register("editName", { onChange: props.updateEditFormField })}
                />
                <p className="form-error-message"> {errors.editName?.message} </p>
            </div>
            {/* animal species input */}
            <div>
                <div>
                    <label>Species</label>
                </div>
                <div>
                    <select className="form-select"
                        name="editSpecies"
                        onChange={props.updateEditFormField}
                        value={props.editAnimalDetails.editSpecies}>
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
                    name="editBreed"
                    value={props.editAnimalDetails.editBreed}
                    {...register("editBreed", { onChange: props.updateEditFormField })}
                />
                <p className="form-error-message"> {errors.editBreed?.message} </p>
            </div>
            {/* animal gender input */}
            <div>
                <div>
                    <label>Gender</label>
                </div>
                <div>
                    <select className="form-select"
                        name="editGender"
                        onChange={props.updateEditFormField}
                        value={props.editAnimalDetails.editGender}>
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
                    name="editDateOfBirth"
                    value={props.editAnimalDetails.editDateOfBirth}
                    placeholder="YYYY-MM-DD"
                    {...register("editDateOfBirth", { onChange: props.updateEditFormField })}
                />
                <p className="form-error-message"> {errors.editDateOfBirth?.message} </p>
            </div>
            {/* animal status tag input */}
            <div>
                <div>
                    <label className="form-check-label" >Status Tags</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        name="editStatusTags"
                        value="HDB Approved"
                        onChange={props.updateEditCheckbox}
                        checked={props.editAnimalDetails.editStatusTags.includes("HDB Approved")}
                        id="hdb-approved" />
                    <label className="form-check-label" htmlFor="hdb-approved">HDB Approved</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        name="editStatusTags"
                        value="Microchipped"
                        onChange={props.updateEditCheckbox}
                        checked={props.editAnimalDetails.editStatusTags.includes("Microchipped")}
                        id="microchipped" />
                    <label className="form-check-label" htmlFor="microchipped">Microchipped</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        name="editStatusTags"
                        value="Sterilised"
                        onChange={props.updateEditCheckbox}
                        checked={props.editAnimalDetails.editStatusTags.includes("Sterilised")}
                        id="sterilised" />
                    <label className="form-check-label" htmlFor="sterilised">Sterilised</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        name="editStatusTags"
                        value="Vaccinated"
                        onChange={props.updateEditCheckbox}
                        checked={props.editAnimalDetails.editStatusTags.includes("Vaccinated")}
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
                        name="editAdoptFoster"
                        value="Adopt"
                        checked={props.editAnimalDetails.editAdoptFoster.includes("Adopt")}
                        id="adopt"
                        {...register("editAdoptFoster", { onChange: props.updateEditCheckbox })}
                    />
                    <label className="form-check-label" htmlFor="adopt">Adopt</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="checkbox"
                        name="editAdoptFoster"
                        value="Foster"
                        checked={props.editAnimalDetails.editAdoptFoster.includes("Foster")}
                        id="foster"
                        {...register("editAdoptFoster", { onChange: props.updateEditCheckbox })}
                    />
                    <label className="form-check-label" htmlFor="foster">Foster</label>
                </div>
                <p className="form-error-message"> {errors.editAdoptFoster?.message} </p>
            </div>
            {/* description input */}
            <div>
                <label>Description</label>
                <textarea className="form-control"
                    name="editDescription"
                    value={props.editAnimalDetails.editDescription}
                    placeholder="Write a short description on the animal"
                    rows="5"
                    {...register("editDescription", { onChange: props.updateEditFormField })}
                ></textarea>
                <p className="form-error-message"> {errors.editDescription?.message} </p>
            </div>
            {/* image url input */}
            <div>
                <label>Image URL of Animal</label>
                <input className="form-control"
                    type="text"
                    name="editImgUrl"
                    value={props.editAnimalDetails.editImgUrl}
                    {...register("editImgUrl", { onChange: props.updateEditFormField })}
                />
                <p className="form-error-message"> {errors.editImgUrl?.message} </p>
            </div>
            <button type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
            <button type="submit"
                className="btn btn-success"
            // data-bs-dismiss="modal"
            >Edit</button>
        </form>
    )
}