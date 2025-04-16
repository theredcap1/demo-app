import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'demo-app',
  webDir: 'www',
  plugins: {
    StatusBar: {
      style: 'dark'
    }
  },
  android: {
    adbTimeout: 10000
  }
};

export default config;
