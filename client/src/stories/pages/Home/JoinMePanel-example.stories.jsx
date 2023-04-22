// import React from 'react';
import JoinMePanel from '../../../pages/Home/JoinMePanel-example';

// Export a default Storybook story for this component.
export default {
    title: 'Kula-Like/Home/JoinMePanel-example',
    component: JoinMePanel,
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

const Template = args => <JoinMePanel {...args} />;

export const DefaultBehaviour = Template.bind({});
DefaultBehaviour.args = {
    onClick: { action: 'clicked' },
};
