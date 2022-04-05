import React from 'react';
import { Rating } from '@mui/material';
import CommentCard from './CommentCard';
import { getAverageRating } from '../../utils';

export default function CommentsList(props) {
    return (
        <React.Fragment>
            <h5>Comments</h5>
            {props.animalComments.length !== 0
                ?
                // Render code below when there's comments submitted
                <div>
                    Average rating: <Rating readOnly
                        value={getAverageRating(props.animalComments)}
                        precision={0.1} />
                    {props.animalComments[0].comments.map((comment, i) =>
                        <React.Fragment key={i}>
                            <CommentCard i={i}
                                comment={comment} />
                        </React.Fragment>
                    )}
                    {/* use commentcard to make the code more concise */}
                </div>
                :
                // Render code below when there's no comments submitted
                <div>
                    No comments submitted yet.
                </div>}
        </React.Fragment>
    )
}