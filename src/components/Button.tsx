import React, { ReactElement, ReactNode } from 'react';

export interface ButtonProp {
  color: string,
  children: ReactNode | ReactNode[];
}

export default function Button({ color, children }: ButtonProp): ReactElement {
  return (
    <button
      type="button"
      style={{ color }}
    >
      {children}
    </button>
  );
}
