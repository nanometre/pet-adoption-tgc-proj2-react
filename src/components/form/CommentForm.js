import React from 'react';
import Rating from '@mui/material/Rating';

export default function CommentForm(props) {
    return (
        <div>
            <p>Visited {props.animal_name} before?</p>
            <p>Leave a comment to help {props.animal_name} get adopted or fostered!</p>
            <form>
                <div>
                    <label>Name</label>
                    <input className="form-control"
                        type="text"
                        name="commentName"
                        value={props.commentName} />
                </div>
                <div>
                    <Rating
                        name="commentRating"
                        // value={value}
                        // onChange={(event, newValue) => {
                        //     setValue(newValue);
                        // }}
                    />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea className="form-control"
                        name="commentContent"
                        value={props.commentContent}></textarea>
                </div>
            </form>
        </div>
    )
}