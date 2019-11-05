import React from 'react'
import useDomainModel from '../helpers/useDomainModel'

export default function ThreeSixtyComponent({model}) {
  const [queries, commands, history] = useDomainModel(model)


  return (
    <>
      <p>image = [{queries.currentImage()}]</p>
      <button onClick={commands.nextImage}>rotateLeft</button>
      <button onClick={commands.previousImage}>rotateRight</button>
      <ul>
        {history.map(cur => (<li id={cur.id}>{JSON.stringify(cur)}</li>))}
      </ul>
    </>
  )
}
