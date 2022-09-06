import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-image">
                <img src={require("../images/hero.png")} alt="grid image" />
            </div>
            <div className="hero-text">
                <h3>online experiences</h3>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    );
}

export default Hero;