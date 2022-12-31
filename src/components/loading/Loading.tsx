import React from 'react';
import classes from './Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={classes.LdsSpinner}>
      {[...new Array(12)].map((_item, index) => (
        <div key={`item_${index}`} />
      ))}
    </div>
  );
};

export default Loading;
