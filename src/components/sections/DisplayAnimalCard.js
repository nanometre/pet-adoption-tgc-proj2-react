import React from "react";
import CommentForm from "../form/CommentForm";
import CommentsList from "./CommentsList";
import '../../assets/styles/section/display-animal-card.css'

export default function DisplayAnimalCard(props) {
    let animalComments = props.comments.filter(comment => comment._id === props.animal._id)

    return (
        <div className="card">
            <img className="card-img-top" src={props.animal.img_url} alt={props.animal.name} />
            <div className="card-body">
                <h5 className="card-title">{props.animal.name}</h5>
                <p className="card-text">{props.animal.description}</p>
                {/* Button to trigger modal */}
                <button type="button" className="card-btn btn btn-primary align-self-end" data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + props.i}>
                    More
                </button>
                {/* Modal */}
                <div className="modal fade" id={"staticBackdrop" + props.i} data-bs-backdrop="static" data-bs-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">{props.animal.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img className="modal-img" src={props.animal.img_url} alt={props.animal.name} />
                                <div>
                                    <p>{props.animal.description}</p>
                                    <hr />
                                    <h5>Animal's Details</h5>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>Species</td>
                                                <td>{props.animal.species.species_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Breed</td>
                                                <td>{props.animal.species.breed}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{props.animal.gender}</td>
                                            </tr>
                                            <tr>
                                                <td>Date of Birth</td>
                                                <td>{props.animal.date_of_birth.slice(0, 10)}</td>
                                            </tr>
                                            <tr>
                                                <td>Status Tags</td>
                                                <td>{props.animal.status_tags.map(t => <span key={t}>{t}<br /></span>)}</td>
                                            </tr>
                                            <tr>
                                                <td>Available for</td>
                                                <td>{props.animal.adopt_foster.map(af => <span key={af}>{af}<br /></span>)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr />
                                    <h5>Current Caretaker's Details</h5>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{props.animal.current_caretaker.caretaker_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{props.animal.current_caretaker.email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr />
                                <CommentsList animalComments={animalComments} />
                                <hr />
                                <div>
                                    <CommentForm animal_name={props.animal.name}
                                        animal_id={props.animal._id}
                                        commentName={props.commentName}
                                        commentContent={props.commentContent}
                                        commentRating={props.commentRating}
                                        postComment={props.postComment}
                                        updateCommentFormField={props.updateCommentFormField}
                                        commentValid={props.commentValid}
                                        commentFormIsValid={props.commentFormIsValid} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => props.setActive('adoptionProcess')}>Adopt me!</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}