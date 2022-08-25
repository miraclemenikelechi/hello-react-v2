import React from "react";

export default function FaceCard() {
    return (
        <header>
            <section className="face-image">
                <img src={require("../images/face.jpg")} alt="dummy face" />
            </section>
            <section className="info">
                <div className="name">
                    miracle k emenike
                </div>
                <div className="role">
                    fullstack developer
                </div>
                <div className="website">
                    <a href="https://github.com/miraclemenikelechi" target={"blank"}>miraclemenikelechi.io</a>
                </div>
            </section>
            <section className="contact">
                <button><span><i class="fa-solid fa-envelope"></i></span> email</button>
                <button><span><i class="fa-brands fa-twitter"></i></span> twitter</button>
            </section>
        </header>
    );
}