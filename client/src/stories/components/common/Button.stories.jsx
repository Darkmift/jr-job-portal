import React from 'react';

import Button, { ButtonVariant } from '@/components/common/Button';

export default {
    title: 'Kula-Like/Button',
    component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: ButtonVariant.FILLED,
    label: 'טקסט',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: ButtonVariant.OUTLINED,
    label: 'טקסט',
};

export const Text = Template.bind({});
Text.args = {
    variant: ButtonVariant.TEXT,
    label: 'טקסט',
};
