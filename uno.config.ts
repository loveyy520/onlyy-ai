
// https://unocss.dev/presets/
// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    // presetTagify, // ts暂不支持
    presetUno,
    presetWebFonts,
    transformerAttributifyJsx,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

// https://unocss-preset-animations.aelita.me/
import presetAnimations from 'unocss-preset-animations'
// https://github.com/hyoban/unocss-preset-shadcn#readme
import { builtinColors, presetShadcn } from "unocss-preset-shadcn"

// https://github.com/unpreset/unocss-preset-scrollbar
import { presetScrollbar } from 'unocss-preset-scrollbar'

// https://github.com/unpreset/unocss-preset-autoprefixer
import presetAutoprefixer from 'unocss-preset-autoprefixer'

export default defineConfig({
    content: {
        filesystem: [
            // ...
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}"
        ],
    },
    preflights: [],
    presets: [
        presetUno(),
        presetAttributify({ /* preset options */}),
        presetUno(),
        // presetTagify(), // ts 不支持
        presetIcons(),
        presetWebFonts(),
        presetAnimations(),
        presetShadcn(builtinColors.map((c) => ({ color: c }))),
        presetScrollbar(),
        presetAutoprefixer()
    ],
    transformers: [
        transformerAttributifyJsx(),  // not work?
        transformerDirectives(),
        transformerVariantGroup()
    ]
})