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
            <span style={{display: 'block'}}>Visited <strong>{props.animal_name}</strong> before?</span>
            <span>Leave a comment to help <strong>{props.animal_name}</strong> get adopted or fostered!</span>
            <div className='custom-form'>
                <form onSubmit={handleSubmit(submitForm)}>
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
                        <label>Name</label>
                        <input className="form-control"
                            type="text"
                            name="commentName"
                            value={props.commentName}
                            {...register("commentName", { onChange: props.updateCommentFormField })} />
                        {errors.commentName ? <span className="form-error-message"> {errors.commentName?.message} </span> : null}
                    </div>
                    
                    <div>
                        <label>Comment</label>
                        <textarea className="form-control"
                            name="commentContent"
                            value={props.commentContent}
                            {...register("commentContent", { onChange: props.updateCommentFormField })}></textarea>
                        {errors.commentContent ? <span className="form-error-message"> {errors.commentContent?.message} </span> : null}
                    </div>
                    {props.commentValid ? <div className='alert alert-success'>Comment successful added.</div> : null}
                    <div className='custom-btn-group'>
                        <button className="btn btn-success"
                            type="submit"
                        >Add comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}