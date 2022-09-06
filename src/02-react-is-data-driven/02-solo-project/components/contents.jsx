import React from 'react';
import { GoLocation } from "react-icons/go";

const Contents = (props) => {
    console.log(props);
    return (
        <div className="travels">
            <div className="travel-image">
                <img src={require(`../images/${props.travel.imageUrl}`)} alt={props.travel.location} />
            </div>
            <div className="travel-text">
                <div>
                    <GoLocation /> <span>{props.travel.location}</span> <a href={props.travel.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div>
                    {props.travel.title}
                </div>
                <div>
                    <span>{props.travel.startDate} - {props.travel.endDate}</span>
                    <p>{props.travel.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Contents;