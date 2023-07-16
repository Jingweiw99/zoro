import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const install = (app: any) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default install
