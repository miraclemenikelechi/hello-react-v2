import React from "react";
import "./styles/index.css";
import FaceCard from "./components/face-card";
import Body from "./components/body";
import Footer from "./components/footer";

export default function App() {
    return (
        <main>
            <FaceCard />
            <Body />
            <Footer />
        </main>
    );
}