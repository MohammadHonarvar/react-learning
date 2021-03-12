import React, { PropsWithChildren } from 'react';

export const userInput = (
  props: PropsWithChildren<{
    defaultUserName?: string;
    userNameChangedHandler: React.ChangeEventHandler<HTMLInputElement>;
  }>
) => {
  const inputStyle = {
    border: '1px solid red',
  };

  return (
    <input
      style={inputStyle}
      type="text"
      onChange={props.userNameChangedHandler}
      placeholder={props.defaultUserName}
    />
  );
};
