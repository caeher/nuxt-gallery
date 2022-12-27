<script setup lang="ts">
import { PropType, computed, ref, watch } from 'vue'

const props = defineProps({
  rounded: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none'>,
    required: false,
    default: 'none'
  },
  shadow: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none'>,
    required: false,
    default: 'none'
  },
  dropShadow: {
    type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none'>,
    required: false,
    default: 'none'
  },
  images: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const radius: object = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  default: 'rounded',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  xxl: 'rounded-2xl',
  none: 'rounded-none'
}

const shadows: object = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  default: 'shadow',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  xxl: 'shadow-2xl',
  none: 'shadow-none'
}

const drops: object = {
  sm: 'drop-shadow-sm',
  md: 'drop-shadow-md',
  default: 'drop-shadow',
  lg: 'drop-shadow-lg',
  xl: 'drop-shadow-xl',
  xxl: 'drop-shadow-2xl',
  none: 'drop-shadow-none'
}
const isRounded = computed(() => {
  return radius[props.rounded]
})
const isShadow = computed(() => shadows[props.shadow])
const isDropShadow = computed(() => drops[props.dropShadow])

const spanColRow = (index: number) => {
  const mod = index % 12
  let col = 'md:col-span-1'
  if (mod < 3) {
    if (mod === 0) {
      col = 'md:col-span-2'
    } else {
      col = 'md:col-span-1'
    }
  } else if (mod > 2 && mod < 5) {
    if (mod % 3 === 0) {
      col = 'md:col-span-1'
    } else {
      col = 'md:col-span-3'
    }
  } else if (mod > 4 && mod < 7) {
    col = 'md:col-span-2'
  } else if (mod > 6 && mod < 11) {
    col = 'md:col-span-1'
  } else {
    col = 'md:col-span-4'
  }
  return col
}
</script>
<template>
  <section>
    <div class="grid gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-4 grid-rows-auto place-content-stretch ">
      <div v-for="(img, index) in images" :key="index" class="max-h-52 md:max-h-64 lg:max-h-80 col-span-1 sm:col-span-2" :class="[spanColRow(index)]">
        <img :src="img" class="h-full w-full object-cover" :class="[isRounded,isShadow,isDropShadow]">
      </div>
    </div>
  </section>
</template>
