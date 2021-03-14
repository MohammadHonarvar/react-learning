// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PropsWithChildren } from 'react';

export const person = (props: PropsWithChildren<{ name: string; age: number }>) => {
  return (
    <div>
      <p>
        I'm {props.name} and i'm {props.age} years old
      </p>
      {props.children && <p>{props.children}</p>}
    </div>
  );
};
