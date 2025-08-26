import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  icons: {
    48: 'public/logo.png',
  },
  action: {
    default_icon: {
      48: 'public/logo.png',
    },
  },
  permissions: [
    'activeTab',
    'scripting'
  ],
  background: {
    service_worker: 'src/background.ts',
    type: 'module'
  },
  commands: {
    _execute_action: {
      suggested_key: {
        default: 'Ctrl+B',
        mac: 'Command+B'
      }
    }
  }
})
