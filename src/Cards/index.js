import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import "./style.css";

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://miro.medium.com/max/1400/1*DChYYPZxxnQb8P9vplA9NQ.jpeg",
    },
    {
      name: "Sandra Bullock",
      url:
        "https://www4.pictures.gi.stylebistro.com/Sandra+Bullock+Shoulder+Length+Hairstyles+B6dnLX5Csivl.jpg",
    },
  ]);
  console.log(setPeople);
  return (
    <div className="cards">
      <div className="cards__container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              onSwipe={(direction) => onSwipe(direction, person.name)}
              onCardLeftScreen={() => onCardLeftScreen(person.name)}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{
                  backgroundImage: `url(${person.url}`,
                  backgroundRepeat: "no-repeat",
                }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
