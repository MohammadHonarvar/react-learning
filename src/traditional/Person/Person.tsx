// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react, { PropsWithChildren } from 'react';

export const person = (
  props: PropsWithChildren<{
    name: string;
    age: number;
    click?: React.MouseEventHandler<HTMLParagraphElement>;
  }>
) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and i'm {props.age} years old
      </p>
      {props.children && <p>{props.children}</p>}
    </div>
  );
};
