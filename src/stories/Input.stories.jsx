import React from 'react';
import { Input } from './Input';

export default {
  title: 'Controls/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'input',
  ...Input.defaultProps,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  ...Default.args,
  helperText: 'Some interesting text',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  ...Default.args,
  startIcon: 'Phone',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  ...Default.args,
  endIcon: 'Lock',
};

export const Value = Template.bind({});
Value.args = {
  ...Default.args,
  value: 'Text',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'sm',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  ...Default.args,
  multiline: true,
  row: 4,
};
