import React from "react";
import EditListingForm from "../form/EditListingForm";

export default function ManageAnimalCard(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={"heading" + props.i}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + props.i} aria-expanded="false" aria-controls={"collapse" + props.i}>
                    {props.animal.name}
                </button>
            </h2>
            <div id={"collapse" + props.i} className="accordion-collapse collapse" aria-labelledby={"heading" + props.i} data-bs-parent="#accordionManage">
                <div className="accordion-body d-flex row">
                    <div className="col-4">
                        <img src={props.animal.img_url} alt={props.animal.name} style={{ width: '100%' }} />
                    </div>
                    <div className="col-8">
                        <p>Description: {props.animal.description}</p>
                        <p>Species: {props.animal.species.species_name}</p>
                        <p>Breed: {props.animal.species.breed}</p>
                        <p>Gender: {props.animal.gender}</p>
                        <p>Date of Birth: {props.animal.date_of_birth.slice(0, 10)}</p>
                        <p>Status Tags: {props.animal.status_tags.map(t => <li key={t}>{t}</li>)}</p>
                        <p>Available for: {props.animal.adopt_foster.map(af => <li key={af}>{af}</li>)}</p>
                        <p>Caretaker: {props.animal.current_caretaker.caretaker_name}</p>
                        <p>Caretaker's Email: {props.animal.current_caretaker.email}</p>
                        {/* button to trigger edit modal */}
                        <button type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target={"#editModal" + props.i}
                            onClick={() => props.storeOriginalDetails(props.animal)}>Edit</button>
                        {/* edit modal */}
                        <div className="modal fade" id={"editModal" + props.i} data-bs-backdrop="static" data-bs-keyboard="false">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="editModalLabel">Edit</h5>
                                        <button type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <EditListingForm editAnimalDetails={props.editAnimalDetails}
                                            updateEditFormField={props.updateEditFormField}
                                            updateEditCheckbox={props.updateEditCheckbox}
                                            editAnimal={props.editAnimal}
                                            editValid={props.editValid}
                                            editFormIsValid={props.editFormIsValid} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* button to trigger delete modal */}
                        <button type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target={"#deleteModal" + props.i}>Delete</button>
                        {/* delete modal */}
                        <div className="modal fade" id={"deleteModal" + props.i} data-bs-backdrop="static" data-bs-keyboard="false">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="deleteModalLabel">Delete</h5>
                                        <button type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Are you sure you want to delete? This action is irreversible.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button"
                                            className="btn btn-danger"
                                            data-bs-dismiss="modal"
                                            onClick={() => props.deleteAnimal(props.animal._id)}>Delete</button>
                                        <button type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal">Cancel</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}