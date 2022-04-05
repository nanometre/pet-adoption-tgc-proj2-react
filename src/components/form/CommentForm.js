import React from 'react';
import { commentSchema } from '../../validations';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Rating from '@mui/material/Rating';
import "../../assets/styles/form/form.css"

export default function CommentForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(commentSchema)
    })
    const submitForm = (data) => {
        let commentDetails = {
            commenter_name: props.commentName,
            content: props.commentContent,
            rating: parseInt(props.commentRating),
        }
        props.commentFormIsValid()
        props.postComment(props.animal_id, commentDetails)
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
                            value={parseInt(props.commentRating)}
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
                {props.commentValid ? <div className='alert alert-success'>Comment successful added.</div> : null}
                <button className="btn btn-success"
                    type="submit"
                >Add comment</button>
            </form>
        </div>
    )
}