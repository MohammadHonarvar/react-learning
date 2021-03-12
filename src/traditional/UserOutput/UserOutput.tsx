import { PropsWithChildren } from 'react';

import './UserOutput.css';

export const userOutput = (
  props: PropsWithChildren<{
    userName?: string;
  }>
) => {
  return (
    <div className="UserOutput">
      {props.userName && <p>Username: {props.userName}</p>}
    </div>
  );
};
