import React from 'react'
import { Services } from './Services'

export default {
  title: 'Example/Services',
  component: Services,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <Services {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Services'
}
export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Services'
}
