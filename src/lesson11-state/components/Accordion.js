import React from 'react';

function Accordion({ items }) {
  const renderdItems = items.map(item => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderdItems}</div>;
}

export default Accordion;
