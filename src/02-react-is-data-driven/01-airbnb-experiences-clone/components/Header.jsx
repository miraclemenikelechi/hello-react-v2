import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={require("../images/logo.png")} alt="logo" />
            </div>
        </header>
    );
};

export default Header;