// Cheap and cheerful DI container that exists only to prove a point of the IoC capability of this architecture
// We could probably use bottle.js or similar here

import toCQRSWithHash from './helpers/toCQRSWithHash'
import ThreeSixtyInteraction from './domain/interaction/ThreeSixtyInteraction'

const container = {}

const threeSixtyInteraction = new ThreeSixtyInteraction()
container.threeSixtyInteractionModel = toCQRSWithHash({
  model: threeSixtyInteraction,
  commands: [
    threeSixtyInteraction.nextImage,
    threeSixtyInteraction.previousImage,
    threeSixtyInteraction.addImage
  ],
  queries: [
    threeSixtyInteraction.currentImage
  ]
})

export default container