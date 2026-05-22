<script setup lang="ts">
import type { PrintComponentRenderProps } from 'print-canvas-designer'

interface ShoeInfoProps {
  [key: string]: unknown
  title: string
  mainText: string
  subText: string
  accentColor: string
  showBadge: boolean
}

defineProps<PrintComponentRenderProps<ShoeInfoProps>>()
</script>

<template>
  <div class="shoe-info-block">
    <span class="shoe-info-strip" :style="{ backgroundColor: element.props?.accentColor || '#2563eb' }" />
    <div class="shoe-info-main">
      <div class="shoe-info-head">
        <span>{{ element.props?.title || 'SHOE INFO' }}</span>
        <b v-if="element.props?.showBadge !== false" :style="{ color: element.props?.accentColor || '#2563eb' }">
          VERIFIED
        </b>
      </div>
      <strong>{{ element.props?.mainText || 'RUNNER-01' }}</strong>
      <small>{{ element.props?.subText || 'BLACK / 42' }}</small>
    </div>
  </div>
</template>
