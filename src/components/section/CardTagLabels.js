import React from "react";
import "../../assets/styles/section/card-tag-labels.css"

export default function CardTagLabels(props) {
    return (
        <div>
            {/* gender labels */}
            <span className="tag-label"
                style={{ backgroundColor: props.animal.gender === 'Male' ? '#2958c8' : '#c42c31', color: 'white' }}>
                {props.animal.gender}
            </span>
            {/* adopt foster labels */}
            {props.animal.adopt_foster.map(af => {
                return (
                    <span key={af} className="tag-label"
                        style={{ backgroundColor: af === 'Adopt' ? '#228a23' : '#b5a03f', color: 'white' }}>
                        {af}
                    </span>
                )
            })}
        </div>
    )
}