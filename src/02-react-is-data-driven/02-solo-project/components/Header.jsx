import React from 'react';

const Header = () => {
    return (
        <header>
            <img src={require("../images/logo.png")} alt="logo" />
            <h3>my travel journal.</h3>
        </header>
    );
};

export default Header;