<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  createPrintDesigner,
  defaultPrintComponents,
  PrintCanvas,
  PrintPreview,
  type PrintComponentDefinition,
  type PrintDesignerContext,
  type PrintDocument,
  type PrintElementType
} from 'print-canvas-designer'

import { shoeInfoBlockComponent } from './customComponents'
import { createShoeLabelDocument, demoData } from './documents'

const documentModel = ref<PrintDocument>(createShoeLabelDocument())
const customComponents = [
  ...defaultPrintComponents,
  shoeInfoBlockComponent as unknown as PrintComponentDefinition
]
const componentButtons: { label: string; type: PrintElementType }[] = [
  { label: '文本', type: 'text' },
  { label: '图片', type: 'image' },
  { label: '矩形', type: 'rect' },
  { label: '横线', type: 'line' },
  { label: '二维码', type: 'qrcode' },
  { label: '条形码', type: 'barcode' },
  { label: '鞋盒标信息块', type: 'shoe-info-block' }
]
const selectedJson = computed(() => designer.activeElement.value
  ? JSON.stringify(designer.activeElement.value, null, 2)
  : '未选中元素')
const selectedElement = computed(() => designer.activeElement.value)
const selectedTypeText = computed(() => selectedElement.value?.type || '-')
const selectedSizeText = computed(() => {
  const element = selectedElement.value
  if (!element) return '-'
  return `${Math.round(element.style.width)} x ${Math.round(element.style.height)}`
})
const contentEditor = computed(() => {
  const element = selectedElement.value
  if (!element) return null
  if (element.type === 'text') {
    return {
      label: element.field ? '绑定字段' : '文本内容',
      value: element.field || element.text || '',
      key: element.field ? 'field' : 'text'
    } as const
  }
  if (element.type === 'barcode' || element.type === 'qrcode') {
    return {
      label: '码值',
      value: element.value || '',
      key: 'value'
    } as const
  }
  if (element.type === 'image') {
    return {
      label: '图片地址',
      value: element.src || '',
      key: 'src'
    } as const
  }
  return null
})
const isTextLikeElement = computed(() => selectedElement.value?.type === 'text')
const isShoeInfoElement = computed(() => selectedElement.value?.type === 'shoe-info-block')

const designer: PrintDesignerContext = createPrintDesigner({
  modelValue: documentModel.value,
  components: customComponents,
  data: demoData,
  initialZoom: 1.12,
  onUpdateModelValue: (value) => {
    documentModel.value = value
  }
})

const add = (type: PrintElementType) => {
  designer.addElement(type, { x: 36, y: 36 })
}

const startDrag = (event: DragEvent, type: PrintElementType) => {
  event.dataTransfer?.setData('application/pcd-component', type)
  if (event.dataTransfer) event.dataTransfer.effectAllowed = 'copy'
}

const fallbackColor = (value?: string) =>
  value && value !== 'transparent' ? value : '#ffffff'

const updateSelectedElement = (patch: Record<string, unknown>) => {
  const element = selectedElement.value
  if (!element) return
  designer.updateElement(element.id, patch)
}

const updateSelectedStyle = (patch: Record<string, unknown>) => {
  const element = selectedElement.value
  if (!element) return
  designer.updateElementStyle(element.id, patch)
}

const updateShoeInfoProp = (key: string, value: string) => {
  const element = selectedElement.value
  if (!element) return
  designer.updateElement(element.id, {
    props: {
      ...(element.props || {}),
      [key]: value
    }
  })
}
</script>

<template>
  <section class="canvas-only-example">
    <header class="custom-topbar">
      <strong>业务自己的顶部</strong>
      <div>
        <button type="button" @click="designer.zoomOut()">缩小</button>
        <button type="button" @click="designer.resetZoom()">100%</button>
        <button type="button" @click="designer.zoomIn()">放大</button>
        <button type="button" @click="designer.undo()">撤销</button>
        <button type="button" @click="designer.redo()">重做</button>
        <button type="button" @click="designer.preview()">预览</button>
        <button type="button" @click="designer.save()">保存</button>
      </div>
    </header>

    <div class="split-example">
      <aside class="side-panel">
        <h3>业务自己的左侧</h3>
        <p>这里只调用画布 SDK，不使用内置左侧组件面板。组件项支持点击添加，也支持拖入画布。</p>
        <div class="button-grid">
          <button
            v-for="item in componentButtons"
            :key="item.type"
            draggable="true"
            type="button"
            @click="add(item.type)"
            @dragstart="startDrag($event, item.type)"
          >
            {{ item.label }}
          </button>
        </div>

      </aside>

      <div class="canvas-host">
        <PrintCanvas :data="demoData" :designer="designer" />
      </div>

      <aside class="side-panel">
        <div class="panel-heading">
          <div>
            <h3>业务自己的右侧</h3>
            <p>读取 activeElement 后，业务可以自由组织属性表单。</p>
          </div>
          <span class="panel-badge">SDK</span>
        </div>

        <template v-if="selectedElement">
          <section class="property-card selected-summary">
            <div>
              <span>当前元素</span>
              <strong>{{ selectedElement.name }}</strong>
            </div>
            <div class="summary-grid">
              <span>类型 <b>{{ selectedTypeText }}</b></span>
              <span>尺寸 <b>{{ selectedSizeText }}</b></span>
            </div>
          </section>

          <section class="property-card">
            <div class="property-title">
              <strong>基础属性</strong>
              <small>content</small>
            </div>
            <label class="full-field">
              <span>元素名称</span>
              <input
                :value="selectedElement.name"
                type="text"
                @change="updateSelectedElement({ name: ($event.target as HTMLInputElement).value })"
              />
            </label>
            <label v-if="contentEditor" class="full-field">
              <span>{{ contentEditor.label }}</span>
              <input
                :value="contentEditor.value"
                type="text"
                @change="updateSelectedElement({ [contentEditor.key]: ($event.target as HTMLInputElement).value })"
              />
            </label>
            <template v-if="isShoeInfoElement">
              <label class="full-field">
                <span>标题</span>
                <input
                  :value="`${selectedElement.props?.title || ''}`"
                  type="text"
                  @change="updateShoeInfoProp('title', ($event.target as HTMLInputElement).value)"
                />
              </label>
              <label class="full-field">
                <span>主内容</span>
                <input
                  :value="`${selectedElement.props?.mainText || ''}`"
                  type="text"
                  @change="updateShoeInfoProp('mainText', ($event.target as HTMLInputElement).value)"
                />
              </label>
              <label class="full-field">
                <span>副内容</span>
                <input
                  :value="`${selectedElement.props?.subText || ''}`"
                  type="text"
                  @change="updateShoeInfoProp('subText', ($event.target as HTMLInputElement).value)"
                />
              </label>
            </template>
          </section>

          <section class="property-card">
            <div class="property-title">
              <strong>位置尺寸</strong>
              <small>px</small>
            </div>
            <div class="field-grid">
              <label>
                <span>X</span>
                <input
                  :value="selectedElement.style.left"
                  type="number"
                  @change="designer.updateElementStyle(selectedElement.id, { left: Number(($event.target as HTMLInputElement).value) })"
                />
              </label>
              <label>
                <span>Y</span>
                <input
                  :value="selectedElement.style.top"
                  type="number"
                  @change="designer.updateElementStyle(selectedElement.id, { top: Number(($event.target as HTMLInputElement).value) })"
                />
              </label>
              <label>
                <span>宽度</span>
                <input
                  :value="selectedElement.style.width"
                  type="number"
                  @change="designer.updateElementStyle(selectedElement.id, { width: Number(($event.target as HTMLInputElement).value) })"
                />
              </label>
              <label>
                <span>高度</span>
                <input
                  :value="selectedElement.style.height"
                  type="number"
                  @change="designer.updateElementStyle(selectedElement.id, { height: Number(($event.target as HTMLInputElement).value) })"
                />
              </label>
            </div>
          </section>

          <section class="property-card">
            <div class="property-title">
              <strong>样式属性</strong>
              <small>style</small>
            </div>
            <div class="field-grid">
              <label v-if="isTextLikeElement">
                <span>字号</span>
                <input
                  :value="selectedElement.style.fontSize || 14"
                  type="number"
                  @change="updateSelectedStyle({ fontSize: Number(($event.target as HTMLInputElement).value) })"
                />
              </label>
              <label>
                <span>文字色</span>
                <input
                  :value="fallbackColor(selectedElement.style.color)"
                  type="color"
                  @input="updateSelectedStyle({ color: ($event.target as HTMLInputElement).value })"
                />
              </label>
              <label>
                <span>背景色</span>
                <input
                  :value="fallbackColor(selectedElement.style.backgroundColor)"
                  type="color"
                  @input="updateSelectedStyle({ backgroundColor: ($event.target as HTMLInputElement).value })"
                />
              </label>
              <label>
                <span>圆角</span>
                <input
                  :value="selectedElement.style.borderRadius || 0"
                  type="number"
                  @change="updateSelectedStyle({ borderRadius: Number(($event.target as HTMLInputElement).value) })"
                />
              </label>
            </div>
          </section>

          <section class="property-card">
            <div class="property-title">
              <strong>快捷操作</strong>
              <small>commands</small>
            </div>
            <div class="command-list">
              <button type="button" @click="designer.duplicateActiveElement()">复制元素</button>
              <button type="button" @click="designer.toggleActiveElementLock()">
                {{ selectedElement.locked ? '解锁元素' : '锁定元素' }}
              </button>
              <button class="danger-button" type="button" @click="designer.removeActiveElement()">删除元素</button>
            </div>
          </section>
        </template>

        <section v-else class="empty-state">
          <strong>请选择一个元素</strong>
          <span>选中后这里会显示业务自己的属性表单。</span>
        </section>

        <section class="property-card data-card">
          <div class="property-title">
            <strong>当前数据</strong>
            <small>activeElement</small>
          </div>
          <pre>{{ selectedJson }}</pre>
        </section>
      </aside>
    </div>

    <div v-if="designer.state.isPreviewOpen" class="demo-preview-mask">
      <div class="demo-preview-dialog">
        <header>
          <div>
            <strong>业务预览</strong>
            <span>{{ designer.state.printDocument.name }}</span>
          </div>
          <button type="button" @click="designer.closePreview()">关闭</button>
        </header>
        <div class="demo-preview-body">
          <PrintPreview
            :components="customComponents"
            :data="demoData"
            :document="designer.state.printDocument"
          />
        </div>
      </div>
    </div>
  </section>
</template>
