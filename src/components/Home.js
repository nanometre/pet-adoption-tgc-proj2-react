import React from "react";

export default function Home(props) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <h3>Adopt an animal and save a life!</h3>
                {/* Consider adding a carousel */}
                <div className="d-flex flex-wrap justify-content-around">
                    {/* TO AMEND TO ALLOW ONLY SHOW A FIXED NUMBER OF ANIMALS. MAYBE 3 */}
                    {props.animals.map((animal, i) => {
                        return (
                            <React.Fragment key={animal._id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={animal.img_url} alt={animal.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{animal.name}</h5>
                                        <p className="card-text">{animal.description}</p>
                                        {/* Button to trigger modal */}
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + i}>
                                            More info
                                        </button>
                                        {/* Modal */}
                                        <div className="modal fade" id={"staticBackdrop" + i} data-bs-backdrop="static" data-bs-keyboard="false">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">{animal.name}</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <img src={animal.img_url} alt={animal.name} style={{ width: '100%' }} />
                                                        <div>
                                                            <p>{animal.description}</p>
                                                            <p>Species: {animal.species.species_name}</p>
                                                            <p>Breed: {animal.species.breed}</p>
                                                            <p>Gender: {animal.gender}</p>
                                                            <p>Date of Birth: {animal.date_of_birth}</p>
                                                            <p>Status Tags: {animal.status_tags.map(t => <li key={t}>{t}</li>)}</p>
                                                            <p>Available for: {animal.adopt_foster.map(af => <li key={af}>{af}</li>)}</p>
                                                            <p>Caretaker: {animal.current_caretaker.caretaker_name}</p>
                                                            <p>Caretaker's Email: {animal.current_caretaker.email}</p>
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
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}