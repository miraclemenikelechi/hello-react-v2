import React from 'react';
import "./styles/style.css";
import data from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';

const App = () => {
    const
        cardData = data.map(function (info) {
            return <Cards
                key={info.id}
                info={info}
            />;
        });
    console.log(cardData);
    return (
        <main>
            <Header />
            <Hero />
            {/* <Cards /> */}
            <section className='cards-container'>
                {cardData}
            </section>
        </main>
    );
};

export default App;