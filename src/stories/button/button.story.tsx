import React, { ReactElement } from 'react';

import { Button } from '../../components';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
}

export function Green(): ReactElement {
  return <Button color='green'>Verde</Button>
}

export function Red(): ReactElement {
  return <Button color='red'>Vermelho</Button>
}
