import React from 'react';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import CommentSection from './CommentSection';
import { getAverageRating } from '../../utils';
import "../../assets/styles/section/comment.css"

export default function CommentsList(props) {
    return (
        <React.Fragment>
            <h5>Comments for {props.animal_name}</h5>
            {props.animalComments.length !== 0
                ?
                // Render code below when there are comments submitted
                <div>
                    <Box sx={{ display: 'flex' }}>
                        <Box>{getAverageRating(props.animalComments).toFixed(1)}</Box>
                        <Rating readOnly
                            value={getAverageRating(props.animalComments)}
                            precision={0.1}
                            sx={{ ml: 1 }} />
                        <Box sx={{ ml: 1 }}>({props.animalComments[0].comments.length})</Box>
                    </Box>
                    <div className="row d-flex">
                        {props.animalComments[0].comments.map((comment, i) =>
                            <React.Fragment key={i}>
                                <CommentSection i={i}
                                    comment={comment} />
                            </React.Fragment>
                        )}
                    </div>
                </div>
                :
                // Render code below when there's no comments submitted
                <div>
                    No comments submitted yet.
                </div>}
        </React.Fragment>
    )
}