import React, { Fragment, useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom"
async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    let { id } = useParams();

    useEffect(() => {
        getSatellites(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        })
    });

    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">{planet.name}</span>
                    <Link to='/'><button className='btn btn-outline-primary' >Voltar para Lista</button></Link>
                </div>
            </nav>
            <div>
            

                <div class="row">
                    <div class="col-2"><img src={planet.img_url} class="img-thumbnail" /></div>
                    <div class="col-9">
                        
                        <h5 >{planet.name}</h5>
                        <p>{planet.description}</p>
                        <h5>Satellites:</h5>
                        <ul>
                            {satellites.map(obj => <li>{obj.name}</li>)}
                        </ul>
                        <a href={planet.link} className='btn btn-dark'>Saiba mais</a>
                    </div>
                </div>
            </div>






        </Fragment >);
}
export default Planet;