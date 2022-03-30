import React from 'react';
import axios from 'axios';
import { manageListingSchema } from '../../validations';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import '../../assets/styles/form/form.css';

export default function ManageListingForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(manageListingSchema)
    })
    const submitForm = async (data) => {
        let response = await axios.post(props.BASE_API_URL + "/user_listings", {email: props.userEmail})
        props.storeUserListings(response.data)
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center'>
            <h5>Input your email to manage your animal listings</h5>
            <div style={{ width: "60%" }}>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <label>Email</label>
                        <input className="form-control"
                            type="text"
                            name="userEmail"
                            value={props.userEmail}
                            {...register("userEmail", { onChange: props.updateFormField })} />
                        <p className="form-error-message"> {errors.userEmail?.message} </p>
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