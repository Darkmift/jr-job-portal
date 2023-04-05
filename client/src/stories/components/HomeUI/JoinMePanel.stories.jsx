// import React from 'react';
import JoinMePanel from '../../../components/HomeUI/JoinMePanel';

// Export a default Storybook story for this component.
export default {
    title: 'Example/JoinMePanel',
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
