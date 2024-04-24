import React from 'react';
import WishlistCard from './ItemCard';

const colors = [
    'bg-pink-200', 'bg-indigo-200', 'bg-orange-200',
    'bg-teal-200', 'bg-gray-200'
];
  

const ItemGrid = () => {
  return (
    <div className="flex flex-wrap overflow-auto h-1/2 overflow-y-scroll">
      {Array.from({ length: 5 }, (_, columnIndex) => (
        <div key={columnIndex} className="w-full md:w-1/5 p-2">
          {colors.map((color, cardIndex) => (
            <WishlistCard key={cardIndex} initialTitle={`Card ${cardIndex + 1}`} color={color}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;

