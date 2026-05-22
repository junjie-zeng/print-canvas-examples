import type { PrintComponentDefinition } from 'print-canvas-designer'

import ShoeInfoBlockInspector from './ShoeInfoBlockInspector.vue'
import ShoeInfoBlockRender from './ShoeInfoBlockRender.vue'

export interface ShoeInfoProps {
  [key: string]: unknown
  title: string
  mainText: string
  subText: string
  accentColor: string
  showBadge: boolean
}

export const shoeInfoBlockComponent: PrintComponentDefinition<ShoeInfoProps> = {
  type: 'shoe-info-block',
  label: '鞋盒标信息块',
  icon: '鞋',
  createElement: (point) => ({
    id: `shoe-info-${Date.now()}`,
    type: 'shoe-info-block',
    name: '鞋盒标信息块',
    props: {
      title: 'STYLE',
      mainText: 'RUNNER-01',
      subText: 'BLACK / 42 / 1 PAIR',
      accentColor: '#2563eb',
      showBadge: true
    },
    style: {
      position: 'absolute',
      left: point.x,
      top: point.y,
      width: 190,
      height: 82,
      color: '#111827',
      backgroundColor: '#ffffff',
      borderColor: '#dbe3ee',
      borderWidth: 0,
      borderStyle: 'solid',
      borderRadius: 8,
      rotate: 0
    }
  }),
  render: ShoeInfoBlockRender,
  inspector: ShoeInfoBlockInspector
}
