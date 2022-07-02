import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://i.imgur.com/4MIM4FY.png" alt="" className="home__image"/> 

                <div className="home__row">
                    <Product
                    id="1"
                    title="Skatey Skateboard, green wheels"
                    price={188.95}
                    rating={5}
                    image="https://i.imgur.com/tMwhWDZ.jpg"/>
                    <Product
                    id="2"
                    title="Moonshine, 9 oz."
                    price={30.85}
                    rating={5}
                    image="https://i.imgur.com/RcEU5mb.png"/>
                </div>

                <div className="home__row">
                
                    <Product
                    id="3"
                    title="Antique Bicycle, black"
                    price={1100.95}
                    rating={5}
                    image="https://i.imgur.com/VYhI3aW.png"
                    />
                    <Product
                    id="4"
                    title="Shoe, red"
                    price={9.99}
                    rating={4}
                    image="https://i.imgur.com/BlWgPoi.png"
                    />
                    <Product
                    id="5"
                    title="Dishiki, blue"
                    price={56.58}
                    rating={3}
                    image="https://i.imgur.com/AHMiC5G.png"
                    />
                </div>

                <div className="home__row">
                <Product
                    id="6"
                    title="Police Car, slightly used"
                    price={250}
                    rating={3}
                    image="https://i.imgur.com/884ckWY.png"
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Home;