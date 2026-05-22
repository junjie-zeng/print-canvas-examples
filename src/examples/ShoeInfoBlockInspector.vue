<script setup lang="ts">
import type { PrintComponentInspectorProps } from 'print-canvas-designer'

interface ShoeInfoProps {
  [key: string]: unknown
  title: string
  mainText: string
  subText: string
  accentColor: string
  showBadge: boolean
}

const props = defineProps<PrintComponentInspectorProps<ShoeInfoProps>>()

const updateProp = (key: keyof ShoeInfoProps, value: string | boolean) => {
  props.updateElement({
    props: {
      ...(props.element.props || {}),
      [key]: value
    } as ShoeInfoProps
  })
}
</script>

<template>
  <div class="custom-inspector">
    <label>
      <span>标题</span>
      <input
        :value="element.props?.title || ''"
        type="text"
        @input="updateProp('title', ($event.target as HTMLInputElement).value)"
      />
    </label>
    <label>
      <span>主内容</span>
      <input
        :value="element.props?.mainText || ''"
        type="text"
        @input="updateProp('mainText', ($event.target as HTMLInputElement).value)"
      />
    </label>
    <label>
      <span>副内容</span>
      <input
        :value="element.props?.subText || ''"
        type="text"
        @input="updateProp('subText', ($event.target as HTMLInputElement).value)"
      />
    </label>
    <label>
      <span>强调色</span>
      <input
        :value="element.props?.accentColor || '#111827'"
        type="color"
        @input="updateProp('accentColor', ($event.target as HTMLInputElement).value)"
      />
    </label>
    <label class="inline-field">
      <input
        :checked="element.props?.showBadge !== false"
        type="checkbox"
        @change="updateProp('showBadge', ($event.target as HTMLInputElement).checked)"
      />
      <span>显示 NEW 标识</span>
    </label>
  </div>
</template>
