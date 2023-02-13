import React from 'react';
import classNames from 'classnames';
import Accordion from '../components/Accordion';

function StateDesignPage() {
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

  const classes = classNames('font-semibold text-blue-500');

  return (
    <>
      <h3 className='text-2xl font-bold mt-4'>
        Demo: State, useState and "Accordion" in UI
      </h3>
      <p className='mb-4'>
        This simple example uses the react hook{' '}
        <span className={classes}>useState</span> to design state for the
        component, communicate <span className={classes}>props</span> from
        parent down to the children. Also how to design and use an{' '}
        <span className='font-semibold'>Accordion</span> in UI.
      </p>
      <Accordion items={items} />
    </>
  );
}

export default StateDesignPage;
