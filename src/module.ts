import { fileURLToPath } from 'url'
import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'
import { ComponentsDir } from '@nuxt/schema'

export interface ModuleOptions {
  enabled: boolean
}

const defaults = {
  enabled: true
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-gallery',
    configKey: 'gallery'
  },
  defaults,
  setup (optionsModule, nuxt) {
    const options = {
      ...defaults,
      ...optionsModule
    }
    if (options.enabled) {
      const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

      // Tailwind configuration
      nuxt.hook('tailwindcss:config', (tailwindConfig: any) => {
        tailwindConfig.content = tailwindConfig.content || []
        tailwindConfig.content.push(resolve(runtimeDir, 'components/*.vue'))
      })

      // Add components dir
      const dir: ComponentsDir = {
        path: resolve(runtimeDir, 'components')
      }
      addComponentsDir(dir)

      nuxt.options.build.transpile.push(runtimeDir)
    }
  }
})
