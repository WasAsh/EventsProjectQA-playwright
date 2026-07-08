import { defineConfig, devices } from '@playwright/test';



export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 5,
  reporter: 'html',
  timeout: 30000,
  expect: {
    timeout: 30000 ,
  },
  use: {
    trace: 'on',
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
