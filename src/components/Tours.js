import Card from './Card';
import React, { useState } from "react";

const Tours = ({ tours,removeTour }) => {
  return (
    <div className="container">
      <div>
        <h2 className="title"> Plan With Sakshi</h2>
      </div>
      <div className="cards">
        {/* we will use map function  to avoid copy pasting and we will have a single line code */}
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}> </Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;
