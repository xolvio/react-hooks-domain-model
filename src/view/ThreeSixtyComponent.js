import React from 'react'
import useDomainModel from '../helpers/useDomainModel'

export default function ThreeSixtyComponent({model}) {
  // const [queries, commands] = useDomainModel(model)
  const [queries, commands] = useDomainProcess(model)

  return (
    <>
      <p>image = [{queries.currentImage()}]</p>
      <button onClick={commands.nextImage}>rotateLeft</button>
      <button onClick={commands.previousImage}>rotateRight</button>
    </>
  )
}