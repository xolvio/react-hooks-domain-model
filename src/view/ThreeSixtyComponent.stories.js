import React from 'react'
import {storiesOf} from '@storybook/react'

import ThreeSixtyComponent from './ThreeSixtyComponent'
import ThreeSixtyInteraction from '../domain/ThreeSixtyInteraction'

const model = ThreeSixtyInteraction()
model.mutations.addImage('first')
model.mutations.addImage('second')
model.mutations.addImage('third')

storiesOf('ThreeSixtyComponent', module)
  .add('default', () => <ThreeSixtyComponent model={model}/>)
