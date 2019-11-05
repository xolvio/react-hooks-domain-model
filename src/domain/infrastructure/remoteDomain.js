// TODO experiment
// can we connect to a remote *business* domain model and allow it to be used here?
// we can then have a service that works with this and that domain
// I'm thinking something like this:

// Create some infrastructure to deal with transport (Apollo/Fetch) for sending commands/queries to a remote API (GQL/REST):
import useDomainModel from '../../helpers/useDomainModel'
import React from 'react'

const vehicleImages = remoteDomain(vehicleImagesAPIURL)
const content = remoteDomain(contentAPIURL)

// Use some local domain models:
const threeSixtyInteraction = ThreeSixtyInteraction()
const threeSixtyLoader = ThreeSixtyLoader()

// pass all these domains into a ViewService
const threeSixtyService = ThreeSixtyService({vehicleImages, content, threeSixtyInteraction, threeSixtyLoader})
// service would fetch content, fetch images and expose domain methods

// use threeSixtyService in a dumb ThreeSixtyComponent using hooks
export default function ThreeSixtyComponent({domainService}) {
  const [queries, commands] = useDomain(threeSixtyService)

  return (
    <>
      <p>image = [{queries.currentImage()}]</p>
      <button onClick={commands.nextImage}>rotateLeft</button>
      <button onClick={commands.previousImage}>rotateRight</button>
    </>
  )
}
