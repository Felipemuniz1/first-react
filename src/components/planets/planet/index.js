import React, { Fragment } from "react";
import ImgUrl from "../../shared";

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}
class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Satellites: []
        };
    }

    componentDidMount() {
        getSatellites(this.props.id).then(data =>
            this.setState(state => state.Satellites = data['satellites'])
        );
    }

    render() {
        return (
            <Fragment>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <p><a href={this.props.link}>Saiba mais</a></p>
                <ImgUrl url_img={this.props.url_img}></ImgUrl>
                <ul>
                    {this.state.Satellites.map(obj => <li>{obj.name}</li>)}
                </ul>
            </Fragment>);
    }
}
export default Planet;