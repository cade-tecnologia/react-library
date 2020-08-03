import React, { ReactElement } from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";

import { Button } from '../../components';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export function Green(): ReactElement {
  const color = text('color', 'green');
  const conteudo = text('conteudo', 'Verde');

  return <Button color={color}>{conteudo}</Button>;
}

export function Red(): ReactElement {
  const color = text('color', 'red');
  const conteudo = text('conteudo', 'Vermelho');

  return <Button color={color}>{conteudo}</Button>;
}
