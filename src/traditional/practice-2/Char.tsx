import React, { PropsWithChildren } from 'react';
import './Char.css';

export const char = (
  props: PropsWithChildren<{
    click?: React.MouseEventHandler<HTMLDivElement>;
  }>
) => {
  return (
    <div className="Char" onClick={props.click}>
      <p>{props.children}</p>
    </div>
  );
};
