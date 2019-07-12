import React from 'react'

export const Bio = (props) => {
    return(
        <div>
            <h2>{props.char.name}</h2>
            <p>Height: {props.char.height} Weight: {props.char.mass}</p>
            <p>Hair: {props.char.hair_color} Skin: {props.char.skin_color}</p>
            <p>Eyes: {props.char.eye_color} YOB: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
        </div>
    )
}