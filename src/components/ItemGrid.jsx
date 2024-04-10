import React from 'react';

const colors = [
    'bg-pink-200', 'bg-indigo-200', 'bg-orange-200',
    'bg-teal-200', 'bg-gray-200'
];

const Card = ({ title, color }) => (
    <div className={`${color} h-40 p-4 shadow rounded-lg m-2 flex justify-center items-center`}>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
  

const ItemGrid = () => {
  return (
    <div className="flex flex-wrap overflow-auto h-1/2 overflow-y-scroll">
      {Array.from({ length: 5 }, (_, columnIndex) => (
        <div key={columnIndex} className="w-full md:w-1/5 p-2">
          {colors.map((color, cardIndex) => (
            <Card key={cardIndex} title={`Card ${cardIndex + 1}`} color={color} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;

