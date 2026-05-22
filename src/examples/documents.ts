import type { PrintDocument } from 'print-canvas-designer'

export const createShoeLabelDocument = (): PrintDocument => ({
  id: 'demo-doc-shoe-label',
  name: '鞋盒标示例',
  page: {
    id: 'demo-page-shoe-label',
    type: 'page',
    paperType: 'label-100x60',
    orientation: 'landscape',
    width: 378,
    height: 227,
    margin: {
      top: 14,
      right: 14,
      bottom: 14,
      left: 14
    },
    backgroundColor: '#ffffff',
    items: [
      {
        id: 'el-bg-panel',
        type: 'rect',
        name: '浅色信息底',
        style: {
          position: 'absolute',
          left: 12,
          top: 12,
          width: 354,
          height: 203,
          color: '#111827',
          backgroundColor: '#f8fafc',
          borderColor: '#d8dee8',
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 8
        }
      },
      {
        id: 'el-brand-bar',
        type: 'rect',
        name: '品牌栏',
        style: {
          position: 'absolute',
          left: 12,
          top: 12,
          width: 354,
          height: 38,
          color: '#ffffff',
          backgroundColor: '#111827',
          borderColor: '#111827',
          borderWidth: 0,
          borderStyle: 'solid',
          borderRadius: 8
        }
      },
      {
        id: 'el-title',
        type: 'text',
        name: '标题',
        text: 'SHOEBOX LABEL',
        style: {
          position: 'absolute',
          left: 24,
          top: 18,
          width: 150,
          height: 22,
          color: '#ffffff',
          backgroundColor: 'transparent',
          fontSize: 15,
          fontWeight: 700,
          textAlign: 'left',
          justifyContent: 'flex-start',
          alignItems: 'center',
          lineHeight: 1.2,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'el-order',
        type: 'text',
        name: '订单号',
        text: 'ORDER SB-24001',
        style: {
          position: 'absolute',
          left: 254,
          top: 19,
          width: 96,
          height: 20,
          color: '#cbd5e1',
          backgroundColor: 'transparent',
          fontSize: 11,
          fontWeight: 700,
          textAlign: 'right',
          justifyContent: 'flex-end',
          alignItems: 'center',
          lineHeight: 1.2,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'el-style',
        type: 'text',
        name: '鞋款信息',
        field: 'styleColorSize',
        style: {
          position: 'absolute',
          left: 24,
          top: 62,
          width: 218,
          height: 36,
          color: '#111827',
          backgroundColor: 'transparent',
          fontSize: 20,
          fontWeight: 700,
          textAlign: 'left',
          justifyContent: 'flex-start',
          alignItems: 'center',
          lineHeight: 1.2,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'el-subtitle',
        type: 'text',
        name: '款号说明',
        text: 'STYLE / COLOR / SIZE',
        style: {
          position: 'absolute',
          left: 24,
          top: 98,
          width: 174,
          height: 16,
          color: '#64748b',
          backgroundColor: 'transparent',
          fontSize: 10,
          fontWeight: 700,
          textAlign: 'left',
          justifyContent: 'flex-start',
          alignItems: 'center',
          lineHeight: 1.1,
          letterSpacing: 0.6,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'el-size-box',
        type: 'rect',
        name: '尺码块',
        style: {
          position: 'absolute',
          left: 206,
          top: 100,
          width: 36,
          height: 26,
          color: '#ffffff',
          backgroundColor: '#2563eb',
          borderColor: '#2563eb',
          borderWidth: 0,
          borderStyle: 'solid',
          borderRadius: 5
        }
      },
      {
        id: 'el-size-text',
        type: 'text',
        name: '尺码',
        text: '42',
        style: {
          position: 'absolute',
          left: 206,
          top: 101,
          width: 36,
          height: 24,
          color: '#ffffff',
          backgroundColor: 'transparent',
          fontSize: 17,
          fontWeight: 800,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 1,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'el-divider',
        type: 'line',
        name: '分隔线',
        style: {
          position: 'absolute',
          left: 24,
          top: 132,
          width: 318,
          height: 1,
          color: '#111827',
          backgroundColor: '#d8dee8',
          borderColor: '#d8dee8',
          borderWidth: 0,
          borderStyle: 'solid',
          borderRadius: 0
        }
      },
      {
        id: 'el-barcode',
        type: 'barcode',
        name: '条形码',
        value: '6901234567890',
        barcodeFormat: 'CODE128',
        showBarcodeText: true,
        barcodeTextFontSize: 12,
        barcodeTextPosition: 'bottom',
        barcodeTextAlign: 'center',
        barcodeTextMargin: 4,
        barcodeMargin: 0,
        barcodeLineWidth: 2,
        barcodeHeight: 48,
        style: {
          position: 'absolute',
          left: 24,
          top: 146,
          width: 218,
          height: 60,
          color: '#111827',
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'el-qr',
        type: 'qrcode',
        name: '二维码',
        value: 'https://example.com/order/SB-24001',
        qrcodeErrorCorrectionLevel: 'M',
        qrcodeMargin: 1,
        style: {
          position: 'absolute',
          left: 270,
          top: 66,
          width: 72,
          height: 72,
          color: '#111827',
          backgroundColor: '#ffffff',
          borderWidth: 4,
          borderStyle: 'solid',
          borderColor: '#ffffff',
          borderRadius: 6
        }
      },
      {
        id: 'el-qr-caption',
        type: 'text',
        name: '扫码说明',
        text: 'SCAN FOR DETAILS',
        style: {
          position: 'absolute',
          left: 260,
          top: 142,
          width: 92,
          height: 14,
          color: '#64748b',
          backgroundColor: 'transparent',
          fontSize: 8,
          fontWeight: 700,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 1,
          letterSpacing: 0.4,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'el-logo',
        type: 'image',
        name: '品牌图片',
        src: 'https://dummyimage.com/120x40/111827/ffffff.png&text=ACME',
        style: {
          position: 'absolute',
          left: 272,
          top: 166,
          width: 68,
          height: 26,
          color: '#111827',
          backgroundColor: '#111827',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 5,
          objectFit: 'contain'
        }
      }
    ]
  }
})

export const demoData = {
  styleColorSize: 'RUNNER-01 / BLACK / 42'
}

export const createCustomComponentDocument = (): PrintDocument => ({
  id: 'demo-doc-custom-component',
  name: '自定义业务组件示例',
  page: {
    id: 'demo-page-custom-component',
    type: 'page',
    paperType: 'label-100x60',
    orientation: 'landscape',
    width: 378,
    height: 227,
    margin: {
      top: 14,
      right: 14,
      bottom: 14,
      left: 14
    },
    backgroundColor: '#ffffff',
    items: [
      {
        id: 'custom-bg',
        type: 'rect',
        name: '背景',
        style: {
          position: 'absolute',
          left: 12,
          top: 12,
          width: 354,
          height: 203,
          color: '#111827',
          backgroundColor: '#f8fafc',
          borderColor: '#dbe3ee',
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 10
        }
      },
      {
        id: 'custom-header',
        type: 'rect',
        name: '标题栏',
        style: {
          position: 'absolute',
          left: 12,
          top: 12,
          width: 354,
          height: 36,
          color: '#ffffff',
          backgroundColor: '#0f172a',
          borderColor: '#0f172a',
          borderWidth: 0,
          borderStyle: 'solid',
          borderRadius: 10
        }
      },
      {
        id: 'custom-title',
        type: 'text',
        name: '模板标题',
        text: 'CUSTOM COMPONENT LABEL',
        style: {
          position: 'absolute',
          left: 24,
          top: 18,
          width: 190,
          height: 22,
          color: '#ffffff',
          backgroundColor: 'transparent',
          fontSize: 14,
          fontWeight: 800,
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'left',
          lineHeight: 1.1,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'custom-component-main',
        type: 'shoe-info-block',
        name: '鞋盒标信息块',
        props: {
          title: 'STYLE CARD',
          mainText: 'RUNNER-01',
          subText: 'BLACK / 42 / 1 PAIR',
          accentColor: '#2563eb',
          showBadge: true
        },
        style: {
          position: 'absolute',
          left: 24,
          top: 64,
          width: 214,
          height: 88,
          color: '#111827',
          backgroundColor: '#ffffff',
          borderColor: '#dbe3ee',
          borderWidth: 0,
          borderStyle: 'solid',
          borderRadius: 8
        }
      },
      {
        id: 'custom-note',
        type: 'text',
        name: '业务说明',
        text: '业务组件负责展示自定义字段，右侧属性面板负责编辑组件 props。',
        style: {
          position: 'absolute',
          left: 24,
          top: 158,
          width: 214,
          height: 28,
          color: '#64748b',
          backgroundColor: 'transparent',
          fontSize: 10,
          fontWeight: 600,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          textAlign: 'left',
          lineHeight: 1.35,
          textWrapMode: 'wrap',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'custom-qr-frame',
        type: 'rect',
        name: '二维码底板',
        style: {
          position: 'absolute',
          left: 268,
          top: 62,
          width: 78,
          height: 96,
          color: '#111827',
          backgroundColor: '#ffffff',
          borderColor: '#dbe3ee',
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: 8
        }
      },
      {
        id: 'custom-qr',
        type: 'qrcode',
        name: '业务二维码',
        value: 'https://example.com/custom-component/RUNNER-01',
        qrcodeErrorCorrectionLevel: 'M',
        qrcodeMargin: 1,
        style: {
          position: 'absolute',
          left: 276,
          top: 70,
          width: 62,
          height: 62,
          color: '#111827',
          backgroundColor: '#ffffff',
          borderColor: '#ffffff',
          borderWidth: 2,
          borderStyle: 'solid',
          borderRadius: 4
        }
      },
      {
        id: 'custom-qr-text',
        type: 'text',
        name: '二维码说明',
        text: 'DETAILS',
        style: {
          position: 'absolute',
          left: 276,
          top: 137,
          width: 62,
          height: 14,
          color: '#64748b',
          backgroundColor: 'transparent',
          fontSize: 9,
          fontWeight: 800,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          lineHeight: 1,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      },
      {
        id: 'custom-barcode',
        type: 'barcode',
        name: '业务条码',
        value: 'PCD24001042',
        barcodeFormat: 'CODE128',
        showBarcodeText: true,
        barcodeTextFontSize: 10,
        barcodeTextPosition: 'bottom',
        barcodeTextAlign: 'center',
        barcodeTextMargin: 2,
        barcodeMargin: 0,
        barcodeLineWidth: 2,
        barcodeHeight: 30,
        style: {
          position: 'absolute',
          left: 252,
          top: 168,
          width: 100,
          height: 38,
          color: '#111827',
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderRadius: 0
        }
      }
    ]
  }
})
