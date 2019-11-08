import root from '../root'

import React from 'react'
import {storiesOf} from '@storybook/react'

import ThreeSixtyComponent from './ThreeSixtyComponent'

const model = root.threeSixtyInteractionModel

model.commands.addImage('first')
model.commands.addImage('second')
model.commands.addImage('third')

storiesOf('ThreeSixtyComponent', module)
  .add('default', () => <ThreeSixtyComponent model={model}/>)
