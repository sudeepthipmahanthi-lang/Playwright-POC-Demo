export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: 2,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {

  trace: 'on-first-retry',

  screenshot: 'only-on-failure',

  video: 'retain-on-failure',

  headless: false,

  storageState: 'auth/user.json'
},

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});
