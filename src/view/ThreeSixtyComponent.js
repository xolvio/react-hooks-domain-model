import React, {useEffect} from 'react'
import useDomain from '../helpers/useDomain'

export default function ThreeSixtyComponent({model}) {
  // ultra thin component with UI logic only. Interaction model is abstracted into models that use a CQRS pattern
  const [queries, commands, history] = useDomain(model)

  // you can still use effects. And since you have commands, you no longer need to dispatch events with reducers
  // instead you can act upon domain objects directly
  useEffect(() => {
    console.log('effect currentImage()')
    // command.doThis(...)
  }, [queries.currentImage()])

  useEffect(() => {
    console.log('effect images')
    // command.doThat(...)
  }, [queries.images])

  return (
    <>
      <h5>Component</h5>
      <p>Image = [{queries.currentImage()}]</p>
      <button onClick={commands.nextImage}>rotateLeft</button>
      <button onClick={commands.previousImage}>rotateRight</button>
      <h5>History</h5>
      <ul>
        {history.map(cur => (<li key={cur.id}>{cur.id + ' ' + cur.command}</li>))}
      </ul>
    </>
  )
}
