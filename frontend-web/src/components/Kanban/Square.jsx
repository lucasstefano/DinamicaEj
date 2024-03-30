// Square.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Square = ({ color }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'square' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: '#d3d3',
        margin: '5px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    ></div>
  );
};

export default Square;
