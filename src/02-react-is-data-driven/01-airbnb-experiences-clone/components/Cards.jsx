import React from 'react';

const Cards = (props) => {
    let badgeText;
    if (props.info.openSpots === 0) {
        badgeText = "sold out";
    } else if (props.info.location === "Online") {
        badgeText = "online";
    }
    return (
        <section className="cards">
            <div className="card-image">
                {badgeText && <span>{badgeText}</span>}
                <img src={require(`../images/${props.info.image}`)} />
            </div>
            <div className="card-texts">
                <div className="line-1">
                    <img src={require("../images/Star.png")} alt="star" /> <span>{props.info.stats.rating}</span> ({props.info.stats.reviewCount}) ・ {props.info.location}
                </div>
                <div className="line-2">
                    <p>{props.info.title}</p>
                </div>
                <div className="line-3">
                    <span>from ${props.info.price}</span>/person
                </div>
            </div>
        </section>
    );
};

export default Cards;