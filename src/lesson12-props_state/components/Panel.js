import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'boreder rounded p-3 drop-shadow-lg bg-white w-full',
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
