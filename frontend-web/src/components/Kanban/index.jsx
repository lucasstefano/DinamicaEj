import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardData } from '../../services/data';

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Column = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 0 10px;
`;

const Item = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 20px;
  background-color: red;
  margin: 5px auto;
  cursor: grab;
`;

function DragAndDrop() {
  const [columns, setColumns] = useState({
    todo: CardData,
    inProgress: [],
    done: []
  });

  useEffect(() => {
    console.log(columns)
  })

  const handleDragStart = (e, column, index) => {
    e.dataTransfer.setData('column', column);
    e.dataTransfer.setData('index', index);
  };

  const handleDrop = (e, columnName) => {
    const columnFrom = e.dataTransfer.getData('column');
    const index = parseInt(e.dataTransfer.getData('index'), 10);
    const item = columns[columnFrom][index];

    if (columnFrom !== columnName) {
      const newColumns = { ...columns };
      newColumns[columnName].push(item);
      newColumns[columnFrom].splice(index, 1);
      setColumns(newColumns);
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Column
        onDrop={(e) => handleDrop(e, 'todo')}
        onDragOver={allowDrop}
      >
        <h2>Todo</h2>
        {columns.todo.map((item, index) => (
          <Item
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, 'todo', index)}
          ></Item>
        ))}
      </Column>
      <Column
        onDrop={(e) => handleDrop(e, 'inProgress')}
        onDragOver={allowDrop}
      >
        <h2>In Progress</h2>
        {columns.inProgress.map((item, index) => (
          <Item
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, 'inProgress', index)}
          />
        ))}
      </Column>
      <Column
        onDrop={(e) => handleDrop(e, 'done')}
        onDragOver={allowDrop}
      >
        <h2>Done</h2>
        {columns.done.map((item, index) => (
          <Item
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, 'done', index)}
          />
        ))}
      </Column>
    </Container>
  );
}

export default DragAndDrop;
