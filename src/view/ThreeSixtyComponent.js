import React from 'react'
import useDomainModel from '../helpers/useDomainModel'

export default function ThreeSixtyComponent({model}) {
  const [queries, mutations]  = useDomainModel(model)
  return (
    <>
      <p>image = [{queries.currentImage()}]</p>
      <button onClick={mutations.rotateLeft}>rotateLeft</button>
      <button onClick={mutations.rotateRight}>rotateRight</button>
    </>
  )
}