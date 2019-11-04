import React from 'react'
import {storiesOf} from '@storybook/react'

import ThreeSixtyComponent from './ThreeSixtyComponent'
import ThreeSixtyInteraction from '../domain/model/ThreeSixtyInteraction'

const model = ThreeSixtyInteraction()
model.commands.addImage('first')
model.commands.addImage('second')
model.commands.addImage('third')

storiesOf('ThreeSixtyComponent', module)
  .add('default', () => <ThreeSixtyComponent model={model}/>)
