import React from 'react';
import Rating from '@mui/material/Rating';

export default function CommentSection(props) {
    return (
        <div className='comment-section col-12 col-md-6'>
            <span style={{display: 'block'}}><strong>{props.comment.commenter_name}</strong> on {props.comment.date_of_comment.slice(0, 10)}</span>
                <Rating name={"commentRating" + props.i}
                    value={props.comment.rating}
                    readOnly />
            <span style={{display: 'block'}}>{props.comment.content}</span>
        </div>
    )
}