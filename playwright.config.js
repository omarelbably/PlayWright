// @ts-check
// import { defineConfig, devices } from '@playwright/test';
const { devices } = require('@playwright/test');
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const defineConfig = ({
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {    timeout: 120 * 1000  }, // the expected autowait
  use: { 
    browserName: 'chromium', // browser name - chrome
    headless: true, // Run tests in headless mode
    screenshot: "on", // capture screenshots
    trace: "retain-on-failure", //bring back all the traces - on - shows all - retain-on-failure - returns the failed test cases trace only
  }, 
  fullyParallel: true,
  reporter: 'html',
});

module.exports = defineConfig