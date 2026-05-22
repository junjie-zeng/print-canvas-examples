<script setup lang="ts">
import { ref } from 'vue'
import {
  defaultPrintComponents,
  PrintDesigner,
  type PrintComponentDefinition,
  type PrintDocument
} from 'print-canvas-designer'

import { shoeInfoBlockComponent } from './customComponents'
import { createCustomComponentDocument, demoData } from './documents'

const documentModel = ref<PrintDocument>(createCustomComponentDocument())

const components = [
  ...defaultPrintComponents,
  shoeInfoBlockComponent as unknown as PrintComponentDefinition
]
</script>

<template>
  <section class="example-card">
    <div class="example-toolbar">
      <div>
        <strong>自定义业务组件</strong>
        <span>业务组件通过 components 传入，render 控制画布渲染，inspector 控制右侧属性。</span>
      </div>
      <code>组件类型：shoe-info-block</code>
    </div>

    <PrintDesigner
      v-model="documentModel"
      :components="components"
      :data="demoData"
      height="calc(100vh - 93px)"
    />
  </section>
</template>
