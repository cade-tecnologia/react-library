import React, { ReactElement, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
  color?: 'red' | 'green',
}

export default function Button({ color, children }: ButtonProps): ReactElement {
  return (
    <button style={{color}}
            onClick={() => console.log('CLICKED')}
    >
      {children}
    </button>
  )
}
