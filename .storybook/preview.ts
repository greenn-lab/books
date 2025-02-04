import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { createRouter, createWebHistory } from 'vue-router'
import '../src/assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

setup((app) => {
  app.use(router)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
