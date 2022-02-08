import React, { Fragment, useState, useEffect } from "react";
import PlanetCard from "./planetCard";

async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json");
    let data = await response.json();
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets().then(planets => setPlanets(planets['planets']));
    }, []);
    const addPlanet = () => {
        let aux = planets[0];
        setPlanets([aux, ...planets]);
    };
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Lista de Planetas</span>
                    <button className='btn btn-outline-primary' onClick={addPlanet}>Adicionar mais um planeta</button>
                </div>
            </nav>
            <div className='container'>
                <div className='row row-cols-4'>
                    {planets.map((planet,index) =>
                        <div className='col' key={index}>
                            <PlanetCard
                                name={planet.name}
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