import React from 'react';

import Button, { ButtonType } from './Button';

export default {
    title: 'Kula-Like/Button',
    component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: ButtonType.FILLED,
    label: 'טקסט',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: ButtonType.OUTLINED,
    label: 'טקסט',
};
