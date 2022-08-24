import React from "react";

export default function Header() {
    return (
        <header>
            <img src={require("../images/logo.png")} alt="react-logo" />
            <h1>unrelated facts about react</h1>
        </header>
    );
}