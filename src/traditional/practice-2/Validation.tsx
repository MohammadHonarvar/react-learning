import { PropsWithChildren } from 'react';

export const validation = (props: PropsWithChildren<{ textLength: number }>) => {
  if (props.textLength >= 10) {
    return <p>Text too long</p>;
  } else if (props.textLength < 5) {
    return <p>Text too short</p>;
  }

  return null;
};
