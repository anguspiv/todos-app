import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-remix-react-router';
import { withPerformance } from 'storybook-addon-performance';

import '~/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  decorators: [withRouter, withPerformance],
};

export default preview;
