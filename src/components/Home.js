import React from "react";

export default function Home(props) {
    return (
        <React.Fragment>
            <h1>All animals</h1>
            {props.animals.map(animals => {
                return (
                    <React.Fragment key={animals._id}>
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src={animals.img_url} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{animals.name}</h5>
                                    <p className="card-text">{animals.description}</p>
                                    <a href="" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}