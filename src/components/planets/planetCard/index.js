import React, { Fragment } from "react";
import ImgUrl from "../../shared";
import{Link} from 'react-router-dom';

const PlanetCard = (props) => {

    return (
        <Fragment>
            <Link to={`/${props.id}`} >
                <div className='card'>
                    <ImgUrl url_img={props.url_img}></ImgUrl>
                    <div className='card-body'>
                        <h5 className='card-title'>{props.name}</h5>
                    </div>
                </div>
            </Link>
        </Fragment>);
}
export default PlanetCard;