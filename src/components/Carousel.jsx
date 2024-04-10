import React, { useState, useEffect } from 'react';

const cardsData = [
  { title: 'Birthday', bgColor: 'bg-blue-200' },
  { title: 'Christmas', bgColor: 'bg-green-200' },
  { title: 'Anniversary', bgColor: 'bg-red-200' },
  { title: 'Baby Shower', bgColor: 'bg-pink-200' },
  { title: 'Graduation', bgColor: 'bg-yellow-200' },
  { title: 'Wedding', bgColor: 'bg-purple-200' }
];

const Card = ({ title, bgColor }) => (
  <div className={`flex-none w-72 h-40 ${bgColor} m-2 rounded shadow-lg flex justify-center items-center`}>
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

const Carousel = () => {
  return (
    <div className="flex overflow-x-auto scroll-smooth scrollbar-hide m-2 border rounded-md">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} bgColor={card.bgColor} />
      ))}
    </div>
  );
};

export default Carousel;
