import React from "react";

export default function Header() {
    return (
        <header>
            <section>
                <img src={require("../images/logo.png")} alt="react-logo" />
                <h1>ReactFacts</h1>
            </section>
            <h3>react course - project 1</h3>
        </header>
    );
}