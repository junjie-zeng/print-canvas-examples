# print-canvas-examples

`print-canvas-examples` 是 `print-canvas-designer` 的 Vue3 集成示例项目，用来演示 npm 安装后的常见接入方式。

## 环境要求

- Node.js 20.19+ 或 22.12+
- Vue 3
- Vite

当前 Vite 版本不支持 Node 18，启动或构建前请先确认 Node 版本。

## 安装运行

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```

## 依赖说明

当前示例直接依赖 npm 上发布的 `print-canvas-designer`：

```json
{
  "dependencies": {
    "print-canvas-designer": "^0.1.1"
  }
}
```

在自己的 Vue3 项目中接入时，安装依赖并引入样式：

```bash
npm install print-canvas-designer
```

```ts
import 'print-canvas-designer/style.css'
```

## 示例说明

### 完整编辑器

文件：

`src/examples/FullDesignerExample.vue`

适合希望快速接入完整编辑器的场景。示例包含：

- `PrintDesigner`
- `v-model`
- `data`
- `uploadImage`
- `save`
- `preview`
- `print`
- `export-pdf`
- `change`

### 自定义业务组件

相关文件：

- `src/examples/CustomComponentExample.vue`
- `src/examples/customComponents.ts`
- `src/examples/ShoeInfoBlockRender.vue`
- `src/examples/ShoeInfoBlockInspector.vue`

这个示例演示业务如何注册自己的组件。画布渲染由 `render` 控制，右侧属性编辑由 `inspector` 控制。

示例中的业务组件是“鞋盒标信息块”，可以编辑标题、主内容、副内容、强调色等字段。

### 只接入画布

文件：

`src/examples/CanvasOnlyExample.vue`

适合业务系统只需要画布能力，左右面板、顶部工具栏全部自己实现的场景。

这个示例使用：

- `createPrintDesigner`
- `PrintCanvas`
- `PrintPreview`
- `designer.addElement`
- `designer.updateElement`
- `designer.updateElementStyle`
- `designer.zoomIn`
- `designer.zoomOut`
- `designer.preview`
- `designer.closePreview`

只接入画布时，预览弹窗、打印、导出等 UI 需要业务自己实现。示例里已经用 `PrintPreview` 实现了一个业务自己的预览弹窗。

## 示例数据

默认画布数据在：

`src/examples/documents.ts`

里面定义了一个鞋盒标模板，包含：

- 文本
- 矩形
- 横线
- 条形码
- 二维码
- 图片

这些都是编辑器当前支持的基础组件。

## 相关链接

- 文档：https://junjie-zeng.github.io/projects/print-canvas-designer/
- GitHub：https://github.com/junjie-zeng/print-canvas-examples
