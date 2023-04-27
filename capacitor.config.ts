import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.jablog.app',
  appName: 'JaBlog',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.47:3000',
    cleartext: true,
  },
}

export default config
