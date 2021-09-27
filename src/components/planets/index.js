import React, { Fragment } from "react";
import Planet from "./planet";
async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json");
    let data = await response.json();
    return data;
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Planets: []
        };
    }

    componentDidMount(){
        getPlanets().then(planets =>
                        this.setState(state => (state.Planets = planets['planets'])
                        )
                    );
    }

    render() {
        return (
            <Fragment>
                <h2>Lista de Planetas</h2>
                
                {this.state.Planets.map((planet) =>
                    <div>
                        <hr />
                        <Planet
                            name={planet.name}
                            description={planet.description}
                            link={planet.link}
                            url_img={planet.url_img}
                            id = {planet.id}
                        />
                    </div>
                )}
            </Fragment>);
    }
}
export default Planets;