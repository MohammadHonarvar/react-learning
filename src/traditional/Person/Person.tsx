// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { PropsWithChildren } from 'react';

import './Person.css';

export const person = (
  props: PropsWithChildren<{
    name: string;
    age: number;
    click?: React.MouseEventHandler<HTMLParagraphElement>;
    nameChangedHandler?: React.ChangeEventHandler<HTMLInputElement>;
  }>
) => {
  return (
    <div className="Person">
      <input type="text" value={props.name} onChange={props.nameChangedHandler} />
      <p onClick={props.click}>
        I'm {props.name} and i'm {props.age} years old
      </p>
      {props.children && <p>{props.children}</p>}
    </div>
  );
};
