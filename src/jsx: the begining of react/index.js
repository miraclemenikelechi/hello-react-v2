import React from "react";
import "./styles/index.css";

export default function Index() {
    return (
        <>
            <header>
                <img src={require("./images/logo.png")} alt="react-logo" />
                <h1>unrelated facts about react</h1>
            </header>

            <main>
                <ol>
                    <li>react was released in 2013.</li>
                    <li>it is owned by <strong>META </strong>(facebook in other words!).</li>
                    <li>its a strong fan of <strong>JSX</strong>, which allows you to write html in javascript(s).</li>
                    <li>react has a large community of developers.</li>
                    <li>react is not a framework.</li>
                </ol>
            </main>

            <footer>
                &copy; 2022 <a target={"blank"} href="https://www.github.com/miraclemenikelechi">miraclemenikelechi</a>. all rights reserved
            </footer>
        </>
    );
};