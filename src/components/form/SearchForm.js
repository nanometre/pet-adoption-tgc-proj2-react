import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm(props) {
    return (
        <div>
            <div className="accordion" id="accordionSearch">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSearch">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <SearchIcon /> Search
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingSearch" data-bs-parent="#accordionSearch">
                        <div className="accordion-body">
                            {/* keyword search input */}
                            <div>
                                <label>Keyword Search</label>
                                <input className='form-control'
                                    type="text"
                                    name="searchInput"
                                    value={props.searchInput}
                                    onChange={props.updateFormField} />
                            </div>
                            {/* age search input */}
                            <div>
                                <span>Age</span>
                                <div>
                                    <label>Born after year</label>
                                    <input className='form-control'
                                        type="text"
                                        name="searchAgeGte"
                                        value={props.searchAgeGte}
                                        onChange={props.updateFormField} />
                                    <label>Born before year</label>
                                    <input className='form-control'
                                        type="text"
                                        name="searchAgeLte"
                                        value={props.searchAgeLte}
                                        onChange={props.updateFormField} />
                                </div>
                            </div>
                            {/* gender search input */}
                            <div>
                                <div>
                                    <label className="form-check-label" >Gender</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchGender"
                                        value="Male"
                                        checked={props.searchGender.includes("Male")}
                                        id="male"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchGender"
                                        value="Female"
                                        checked={props.searchGender.includes("Female")}
                                        id="female"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                            </div>
                            {/* species search input */}
                            <div>
                                <div>
                                    <label className="form-check-label" >Species</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchSpecies"
                                        value="Dog"
                                        checked={props.searchSpecies.includes("Dog")}
                                        id="dog"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="dog">Dog</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchSpecies"
                                        value="Cat"
                                        checked={props.searchSpecies.includes("Cat")}
                                        id="cat"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="cat">Cat</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchSpecies"
                                        value="Hamster"
                                        checked={props.searchSpecies.includes("Hamster")}
                                        id="hamster"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="hamster">Hamster</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchSpecies"
                                        value="Others"
                                        checked={props.searchSpecies.includes("Others")}
                                        id="others"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="others">Others</label>
                                </div>
                            </div>
                            {/* status tag input */}
                            <div>
                                <div>
                                    <label className="form-check-label" >Status Tags</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchStatusTags"
                                        value="HDB Approved"
                                        checked={props.searchStatusTags.includes("HDB Approved")}
                                        id="hdb-approved"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="hdb-approved">HDB Approved</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchStatusTags"
                                        value="Microchipped"
                                        checked={props.searchStatusTags.includes("Microchipped")}
                                        id="microchipped"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="microchipped">Microchipped</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchStatusTags"
                                        value="Sterilised"
                                        checked={props.searchStatusTags.includes("Sterilised")}
                                        id="sterilised"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="sterilised">Sterilised</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchStatusTags"
                                        value="Vaccinated"
                                        checked={props.searchStatusTags.includes("Vaccinated")}
                                        id="vaccinated"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="vaccinated">Vaccinated</label>
                                </div>
                            </div>
                            {/* foster adopt search input */}
                            <div>
                                <div>
                                    <label className="form-check-label" >Available for</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchFosterAdopt"
                                        value="Adopt"
                                        checked={props.searchFosterAdopt.includes("Adopt")}
                                        id="adopt"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="adopt">Adopt</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        name="searchFosterAdopt"
                                        value="Foster"
                                        checked={props.searchFosterAdopt.includes("Foster")}
                                        id="foster"
                                        onChange={props.updateCheckbox} />
                                    <label className="form-check-label" htmlFor="foster">Foster</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}