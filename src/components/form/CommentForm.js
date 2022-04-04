import React from 'react';
import { commentSchema } from '../../validations';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../assets/styles/form/form.css"
import Rating from '@mui/material/Rating';

export default function CommentForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(commentSchema)
    })
    const submitForm = (data) => {
        console.log(data)
        console.log(props.commentRating)
    }

    return (
        <div>
            <p>Visited {props.animal_name} before?</p>
            <p>Leave a comment to help {props.animal_name} get adopted or fostered!</p>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label>Name</label>
                    <input className="form-control"
                        type="text"
                        name="commentName"
                        value={props.commentName}
                        {...register("commentName", { onChange: props.updateCommentFormField })} />
                    <p className="form-error-message"> {errors.commentName?.message} </p>
                </div>
                <div>
                    <label>Rating</label>
                    <div>
                        <Rating
                            name="commentRating"
                            value={props.commentRating}
                            onChange={(newRating) => {
                                props.updateCommentFormField(newRating)
                            }} />
                    </div>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea className="form-control"
                        name="commentContent"
                        value={props.commentContent}
                        {...register("commentContent", { onChange: props.updateCommentFormField })}></textarea>
                    <p className="form-error-message"> {errors.commentContent?.message} </p>
                </div>
                <button className="btn btn-success"
                    type="submit"
                >Add comment</button>
            </form>
        </div>
    )
}