import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./01-jsx: the-begining-of-react/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
    return (
        <>
            <Index />
        </>
    );
}

root.render(App());