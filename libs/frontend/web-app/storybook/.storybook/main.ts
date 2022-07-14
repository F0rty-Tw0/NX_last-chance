import { rootMain } from '../../../../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [...rootMain.stories, '../../../**/*.stories.mdx', '../../../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...(rootMain.addons || [])],
  // TODO: CHECK FOR THE CORRECT IMPORT
  staticDirs: [{ from: '../../../shared/assets/src/lib', to: '/assets' }],
  webpackFinal: async (storyConfig, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      return rootMain.webpackFinal(storyConfig, { configType } as Options);
    }

    // add your own webpack tweaks if needed

    return storyConfig;
  },
};

module.exports = config;
