import React, { ReactElement } from 'react';

interface ButtonProps {
  color?: 'red' | 'green',
}

export default function Button({ color }: ButtonProps): ReactElement {
  return (
    <button style={{color}}
            onClick={() => console.log('CLICKED')}
    >
      Eae
    </button>
  )
}
