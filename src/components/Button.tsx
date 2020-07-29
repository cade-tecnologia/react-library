import React, { ReactElement, ReactNode } from 'react';

export interface ButtonProp {
  color: 'green' | 'red';
  children: ReactNode | ReactNode[];
}

export default function Button({ color }: ButtonProp): ReactElement {
  return (
    <button
      type="button"
      style={{ color }}
      // eslint-disable-next-line no-console
      onClick={() => console.log('CLICKED')}
    />
  );
}
