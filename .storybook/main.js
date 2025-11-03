

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'lucide-react/dynamicIconImports'
    ];
    
    // Configure base path for GitHub Pages deployment
    // This will be /arkem-design-system/ when deployed to GitHub Pages
    if (process.env.GITHUB_PAGES) {
      config.base = '/arkem-design-system/';
    }
    
    return config;
  }
};
export default config;