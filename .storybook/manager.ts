import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'mishmash',
  brandUrl: './',
  brandImage: './mishmash.png',
  brandTarget: '_self',

  // Theme colors - Green palette
  colorPrimary: '#2E7D32',    // Deep green
  colorSecondary: '#4CAF50',  // Medium green

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#81C784',  // Light green
  appBorderRadius: 4,

  // Text colors
  textColor: '#1B5E20',       // Dark green
  textInverseColor: '#ffffff',

  // Toolbar colors
  barTextColor: '#2E7D32',    // Deep green
  barSelectedColor: '#4CAF50', // Medium green
  barBg: '#F1F8E9'           // Very light green background
})

addons.setConfig({
  theme
})
