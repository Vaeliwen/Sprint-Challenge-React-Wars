import React from 'react'
import {Container, Header} from 'semantic-ui-react';

export const Bio = (props) => {
    return(
        <Container text style={{
            padding: '10px'
        }}>
            <Header as='h2'>{props.char.name}</Header>
            <p>Height: {props.char.height} Weight: {props.char.mass}</p>
            <p>Hair: {props.char.hair_color} Skin: {props.char.skin_color}</p>
            <p>Eyes: {props.char.eye_color} YOB: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
        </Container>    
        )
}