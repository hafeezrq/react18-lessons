import classNames from 'classnames';

function Skeleton({ times, className }) {
  const outerDivClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'mb-5',
    className
  );
  const innerDiveClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => (
      <div key={i} className={outerDivClassNames}>
        <div className={innerDiveClassNames}></div>
      </div>
    ));
  return boxes;
}

export default Skeleton;
