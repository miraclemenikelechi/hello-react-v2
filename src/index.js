import React from "react";
import ReactDOM from "react-dom/client";
// import Index from "./01-jsx: the-begining-of-react/index";
import Index from "./02-react-is-data-driven/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
    return (
        <>
            <Index />
        </>
    );
}

root.render(App());