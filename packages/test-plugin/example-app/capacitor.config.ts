/// <reference types="@cap-kit/test-plugin" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.plugin',
  appName: 'example-app',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchAutoHide: false
    },
    Test: {
      customMessage: " - Hello from Config!",
    },
  },
};

export default config;
