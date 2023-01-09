import React from 'react';
import Accordion from './components/Accordion';

function StateDesignApp() {
  const items = [
    {
      id: 'sdf234',
      label: 'Can I use React in my projects?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam iste ducimus amet eum odit delectus ad corrupti culpa, ratione, ut, nihil architecto vitae similique.',
    },
    {
      id: 'sdf456',
      label: 'Can I use Javascript in my projects?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam iste ducimus amet eum odit delectus ad corrupti culpa, ratione, ut, nihil architecto vitae similique.',
    },
    {
      id: 'sdf789',
      label: 'Can I use HTML/CSS in my projects?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam iste ducimus amet eum odit delectus ad corrupti culpa, ratione, ut, nihil architecto vitae similique.',
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default StateDesignApp;
