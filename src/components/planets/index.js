import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json");
    let data = await response.json();
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets().then(planets => setPlanets(planets['planets']));
    },[]);
    const addPlanet = () => {
        let aux = planets[0];
        setPlanets([aux,...planets]);
    };
    return (
        <Fragment>
            <h2>Lista de Planetas</h2>
            <button className='btn btn-primary' onClick={addPlanet}>Adicionar</button>
            <div className='container'>
            <div className='row row-cols-4'>
                {planets.map((planet) =>
                <div className='col'>
                    <Planet
                        name={planet.name}
                        description={planet.description}
                        link={planet.link}
                        url_img={planet.url_img}
                        id={planet.id}
                    />
                </div>
                )}
                </div>
            </div>
        </Fragment>);
}

export default Planets;