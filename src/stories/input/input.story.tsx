import React, { ReactElement } from 'react';

import { Input } from '../../components';

export default {
  component: Input,
  title: 'Input',
  excludeStories: /.*Data$/,
}

export function Default(): ReactElement {
  return <Input type='text' />
}

export function Password(): ReactElement {
  return <Input type='password' />
}

export function Number(): ReactElement {
  return <Input type='number' />
}

export function Required(): ReactElement {
  return <Input type='text' required />
}
