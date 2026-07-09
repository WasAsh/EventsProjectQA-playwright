import { defineConfig, devices } from '@playwright/test';



export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 5,
  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],
    ['allure-playwright']
  ],
  timeout: 50000,
  expect: {
    timeout: 50000,
  },
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      },
    },

    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
      },
    },

  ],

});
