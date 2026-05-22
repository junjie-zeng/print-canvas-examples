<script setup lang="ts">
import { ref } from 'vue'
import { PrintDesigner, type PrintDocument } from 'print-canvas-designer'

import { createShoeLabelDocument, demoData } from './documents'

const documentModel = ref<PrintDocument>(createShoeLabelDocument())
const lastEvent = ref('等待操作')

const markEvent = (name: string, document: PrintDocument) => {
  lastEvent.value = `${name}: ${document.name}`
}

const uploadImage = async (file: File) => {
  return URL.createObjectURL(file)
}
</script>

<template>
  <section class="example-card">
    <div class="example-toolbar">
      <div>
        <strong>完整组件接入</strong>
        <span>v-model、data、uploadImage、保存/预览/打印事件都走组件参数。</span>
      </div>
      <code>{{ lastEvent }}</code>
    </div>

    <PrintDesigner
      v-model="documentModel"
      :data="demoData"
      height="calc(100vh - 93px)"
      :initial-zoom="1"
      :upload-image="uploadImage"
      @change="markEvent('change', $event)"
      @export-pdf="markEvent('export-pdf', $event)"
      @preview="markEvent('preview', $event)"
      @print="markEvent('print', $event)"
      @save="markEvent('save', $event)"
    />
  </section>
</template>
