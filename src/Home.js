import React from 'react';
import './Home.css';
import Product from './Product';
import bike from './assets/bike.png';
import skatey from './assets/skateboard.png';
import sneaky from './assets/sneaker.png';
import cop from './assets/cop.png';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="https://i.imgur.com/4MIM4FY.png" alt="" className="home__image" />

        <div className="home__row">
          <Product
            id="1"
            title="Skatey Skateboard, green wheels"
            price={ 188.95 }
            rating={ 5 }
            image={ skatey } />
          <Product
            id="2"
            title="Moonshine, 9 oz."
            price={ 30.85 }
            rating={ 5 }
            image="https://i.imgur.com/9TN3KVP.png" />
        </div>

        <div className="home__row">

          <Product
            id="3"
            title="Antique Bicycle, black"
            price={ 1100.95 }
            rating={ 5 }
            image={ bike }
          />
          <Product
            id="4"
            title="Shoe, red"
            price={ 9.99 }
            rating={ 4 }
            image={ sneaky }
          />
          <Product
            id="5"
            title="Dishiki, blue"
            price={ 56.99 }
            rating={ 3 }
            image="https://i.imgur.com/SwbZZD7.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;