import React from "react";
import "./styles/index.css";
import data from "./data";
import Header from "./components/Header";
import Contents from "./components/contents";

export default function App() {
    const
        travels = data.map(function (travel) {
            return (
                <Contents
                    key={travel.id}
                    travel={travel}
                />
            );
        });

    return (
        <main>
            <Header />
            <section className="travel-container">
                {travels}
            </section>
        </main>
    );
}