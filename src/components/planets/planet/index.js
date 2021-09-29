import React, { Fragment, useEffect, useState} from "react";
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
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p><a href={props.link}>Saiba mais</a></p>
            <ImgUrl url_img={props.url_img}></ImgUrl>
            <ul>
                {satellites.map(obj => <li>{obj.name}</li>)}
            </ul>
        </Fragment>);
}
export default Planet;