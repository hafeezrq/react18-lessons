import { Fragment } from 'react';

function Table({ data, config }) {
  const renderedTHeaders = config.map(head => {
    if (head.header) {
      return <Fragment key={head.label}>{head.header()}</Fragment>;
    }
    return <th key={head.label}>{head.label}</th>;
  });

  const renderedRows = data.map(row => {
    const renderedCells = config.map(col => {
      return (
        <td className='p-3' key={col.label}>
          {col.render(row)}
        </td>
      );
    });
    return (
      <tr className='border-b' key={row.name}>
        {/* <td className='p-3'>{config[0].render(fruit)}</td>
        <td className='p-3'>{config[1].render(fruit)}</td>
        <td className='p-3'>{config[2].render(fruit)}</td> */}
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className='table-auto border-spacing-2 border mt-4'>
      <thead>
        <tr className='border-b-2'>{renderedTHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
