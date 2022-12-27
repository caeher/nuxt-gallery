# Nuxt Gallery

This is a simple image gallery for Nuxt3

## Instalation 

`npm install --save-dev @caeher/nuxt-gallery`

## Setup

Add nuxt
```js
export default defineNuxtConfig({
  modules: [
    '@caeher/nuxt-gallery'
  ],
  gallery: {
    // enabled: false // Disabled module
  },
})
```
## Usage

```html
<BasicGallery
    :images="images"
    rounded="lg"
    drop-shadow="lg"
    shadow="lg"
  />
```

### Props

| Name | Type | Description |
| -- | -- | -- |
| images | string[] | Images sources |
| rounded | string<'sm' \| 'md' \| 'lg' \| 'xl' \| 'none'> | border-radius property |
| drop-shadow | string<'sm' \| 'md' \| 'lg' \| 'xl' \| 'none'> | box-shadow property |
| shadow | string<'sm' \| 'md' \| 'lg' \| 'xl' \| 'none'> | drop-shadow property |

#### Example images prop structure

```js
const images = [
  'https://example.com/image.png',
  ...
]
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
