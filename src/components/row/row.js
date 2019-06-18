import React from 'react';

import './row.css';

export const Row = ({
  left,
  right
}) => {
  return <React.Fragment>
        {left}
        {right}
      </React.Fragment>;
};
