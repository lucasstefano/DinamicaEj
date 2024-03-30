// Container.js
import React from 'react';
import { useDrop } from 'react-dnd';

const Container = ({ children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'square',
    drop: () => console.log('Dropped!'),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      style={{
        width: '300px',
        height: '300px',
        backgroundColor: '#d3d3',
        margin: '20px',
        position: 'relative',
      }}
    >
      {isActive ? 'Release to drop' : 'Drag a square here'}
      {children}
    </div>
  );
};

export default Container;
