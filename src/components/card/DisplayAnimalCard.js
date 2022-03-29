import React from "react";

export default function DisplayAnimalCard(props) {
    return (
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={props.animal.img_url} alt={props.animal.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.animal.name}</h5>
                    <p className="card-text">{props.animal.description}</p>
                    {/* Button to trigger modal */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + props.i}>
                        More
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id={"staticBackdrop" + props.i} data-bs-backdrop="static" data-bs-keyboard="false">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">{props.animal.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img src={props.animal.img_url} alt={props.animal.name} style={{ width: '100%' }} />
                                    <div>
                                        <p>{props.animal.description}</p>
                                        <p>Species: {props.animal.species.species_name}</p>
                                        <p>Breed: {props.animal.species.breed}</p>
                                        <p>Gender: {props.animal.gender}</p>
                                        <p>Date of Birth: {props.animal.date_of_birth.slice(0, 10)}</p>
                                        <p>Status Tags: {props.animal.status_tags.map(t => <li key={t}>{t}</li>)}</p>
                                        <p>Available for: {props.animal.adopt_foster.map(af => <li key={af}>{af}</li>)}</p>
                                        <p>Caretaker: {props.animal.current_caretaker.caretaker_name}</p>
                                        <p>Caretaker's Email: {props.animal.current_caretaker.email}</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => props.setActive('adoptionProcess')}>Adopt me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}