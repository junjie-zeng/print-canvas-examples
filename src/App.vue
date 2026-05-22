<script setup lang="ts">
import { computed, ref } from 'vue'

import CanvasOnlyExample from './examples/CanvasOnlyExample.vue'
import CustomComponentExample from './examples/CustomComponentExample.vue'
import FullDesignerExample from './examples/FullDesignerExample.vue'

const examples = [
  {
    key: 'full',
    title: '完整编辑器',
    description: '直接使用 PrintDesigner，适合快速接入完整的左侧组件、画布、右侧属性面板。',
    icon: 'layout',
    component: FullDesignerExample
  },
  {
    key: 'custom-component',
    title: '自定义业务组件',
    description: '注册业务组件，组件渲染和右侧属性编辑都由业务项目决定。',
    icon: 'component',
    component: CustomComponentExample
  },
  {
    key: 'canvas-only',
    title: '只接入画布',
    description: '只使用 PrintCanvas 和画布 SDK，顶部、左侧和右侧都由业务项目自己实现。',
    icon: 'canvas',
    component: CanvasOnlyExample
  }
]

const activeKey = ref(examples[0].key)
const activeExample = computed(() => examples.find((item) => item.key === activeKey.value) || examples[0])
</script>

<template>
  <main class="demo-shell">
    <aside class="demo-nav">
      <div>
        <div class="brand-title">
          <img src="/favicon.svg" alt="" />
          <div>
            <p class="eyebrow">print-canvas-designer</p>
            <h1>Vue3 集成示例</h1>
          </div>
        </div>
        <p class="intro">
          这个项目用于演示 npm 安装后的真实接入方式。
        </p>
      </div>

      <nav class="example-tabs" aria-label="示例列表">
        <button
          v-for="item in examples"
          :key="item.key"
          class="example-tab"
          :class="{ active: item.key === activeKey }"
          type="button"
          @click="activeKey = item.key"
        >
          <span class="tab-icon" :class="`tab-icon-${item.icon}`" aria-hidden="true">
            <svg v-if="item.icon === 'layout'" viewBox="0 0 24 24">
              <path d="M4 5h16v14H4zM4 10h16M9 10v9" />
            </svg>
            <svg v-else-if="item.icon === 'component'" viewBox="0 0 24 24">
              <path d="M8 4h8v6H8zM4 14h7v6H4zM13 14h7v6h-7z" />
            </svg>
            <svg v-else viewBox="0 0 24 24">
              <path d="M5 5h14v14H5zM8 8h8v8H8z" />
            </svg>
          </span>
          <span class="tab-content">
            <span class="tab-title">
              {{ item.title }}
              <em v-if="item.key === activeKey">当前</em>
            </span>
            <small>{{ item.description }}</small>
          </span>
        </button>
      </nav>

      <div class="nav-links">
        <span>相关链接</span>
        <a class="docs-link" href="https://junjie-zeng.github.io/projects/print-canvas-designer/" target="_blank" rel="noreferrer">
          查看文档
        </a>
        <a class="github-link" href="https://github.com/junjie-zeng/print-canvas-designer" target="_blank" rel="noreferrer">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
            />
          </svg>
          GitHub 仓库
        </a>
      </div>
    </aside>

    <section class="demo-content">
      <component :is="activeExample.component" />
    </section>
  </main>
</template>
