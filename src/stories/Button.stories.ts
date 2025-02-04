import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '../components/BaseButton.vue'

const meta = {
  title: 'Example/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
}
