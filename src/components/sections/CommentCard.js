import React from 'react';
import Rating from '@mui/material/Rating';

export default function CommentCard(props) {
    return (<div>
        <p>{props.comment.commenter_name} at {props.comment.date_of_comment}</p>
        <p><Rating name={"commentRating" + props.i}
            value={props.comment.rating}
            readOnly /></p>
        <p>{props.comment.content}</p>
    </div>
    )
}