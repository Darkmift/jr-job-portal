const path = require('path');
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config, { configType }) {
        return {
            ...config,
            define: { 'process.env': {} },
            resolve: {
                alias: [
                    {
                        find: '@',
                        replacement: path.resolve(__dirname, '../src'),
                    },
                ],
            },
        };
    },
    docs: {
        autodocs: true,
    },
};
