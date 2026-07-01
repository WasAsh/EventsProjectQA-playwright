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
    browserName: 'chromium',
    headless: true,
  },
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  // ],

});
