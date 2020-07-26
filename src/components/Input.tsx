import React, { ReactElement } from 'react';

export interface InputProp {
  type: 'text' | 'password' | 'number',
  onClick?: () => void,
  required?: boolean,
}
export default function Input(props: InputProp): ReactElement {
  const {
    type,
    onClick,
    required,
  } = props;

  return (
    <input type={type} onClick={onClick} required={required}/>
  )
}
