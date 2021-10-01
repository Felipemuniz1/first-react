import React, { Fragment, useEffect, useState } from "react";
import ImgUrl from "../../shared";

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSatellites(props.id).then(data => setSatellites(data['satellites']))
    });

    return (
        <Fragment>
            <div className='card'>
            <ImgUrl url_img={props.url_img}></ImgUrl>
            <div className='card-body'>
                <h5 className='card-title'>{props.name}</h5>
                <p className='card-text'>{props.description}</p>
                <h5>Satellites:</h5>
                <ul>
                    {satellites.map(obj => <li>{obj.name}</li>)}
                </ul>
                <a href={props.link} className='btn btn-dark'>Saiba mais</a>
            </div>
            </div>
            
            
        </Fragment>);
}
export default Planet;