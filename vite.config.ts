import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import macrosPlugin from "vite-plugin-babel-macros";
import { splitVendorChunkPlugin } from 'vite';
import commonjs from 'vite-plugin-commonjs';
const alias = require('./alias');
export default defineConfig({
  resolve: {
    alias,
  },
  build: {
    outDir: 'build',
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 100000,
        }
      }
    }, 
  plugins: [splitVendorChunkPlugin(),react({
    babel: {
      "presets": ["@emotion/babel-preset-css-prop"],
      "plugins": [
        [
          "react-intl-auto"
        ],
        [
          'react-intl',
          {
            messagesDir: './messages/',
          },],
        ["lodash"]
      ]
    }
  }),
  commonjs(/* options */) ,
    legacy(),
  macrosPlugin()]
})
