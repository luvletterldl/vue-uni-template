import type { Preset, SourceCodeTransformer } from 'unocss'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

// uni-app
// const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false
const isApplet = true
// taro
const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
  presets.push(presetApplet())
  presets.push(presetRemRpx())
  transformers.push(transformerAttributify({ ignoreAttributes: ['block'] }))
  transformers.push(transformerApplet())
}
else {
  presets.push(presetUno())
  presets.push(presetAttributify())
  presets.push(presetIcons({
    scale: 1.2,
    warn: true,
  }))
}

export default defineConfig({
  shortcuts: {
    'covers': 'py-3vh bg-hex-f3f4f5 overflow-y-auto w-full h-96vh pl-4vw',
    'wh-full': 'w-full h-full',
    'cp': 'cursor-pointer pointer-events-auto',
    'cna': 'cursor-not-allowed pointer-events-none',
    'fc': 'flex flex-col',
    'fr': 'flex-row',
    'ic': 'items-center',
    'jc': 'justify-center',
    'jb': 'justify-between',
  },
  presets: [
    ...presets,
  ],
  transformers: [
    ...transformers,
  ],
  rules: [
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
  ],
  theme: {
    colors: {
      main: '#f668b6',
    },
  },
})
