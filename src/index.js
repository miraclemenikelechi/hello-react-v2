import React from "react";
import ReactDOM from "react-dom";
import Index from "./jsx: the begining of react/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
    return (
        <Index />
    );
}

root.render(App());