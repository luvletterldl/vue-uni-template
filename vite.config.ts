import path from 'node:path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import uniModule from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirective from '@unocss/transformer-directives'

// @ts-expect-error missing types
const Uni = uniModule.default || uniModule

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Uni(),
    UnoCSS({
      transformers: [
        transformerDirective(),
        transformerVariantGroup(),
      ],
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      resolvers: [],
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    Components({
      dts: true,
      dirs: [
        './src/components',
      ],
    }),
  ],
})
