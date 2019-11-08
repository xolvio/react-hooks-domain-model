import root from '../../root'

describe('ThreeSixtyInteraction', () => {
  describe('previousImage', () => {
    it('should stop on the first image', () => {
      const {commands, queries} = root.threeSixtyInteractionModel
      commands.addImage('firstImage')

      commands.previousImage()

      expect(queries.currentImage()).toEqual('firstImage')
    })
  })
  describe('nextImage', () => {
    it('should stop on the final image', () => {
      const {commands, queries} = root.threeSixtyInteractionModel
      commands.addImage('firstImage')
      commands.addImage('finalImage')

      commands.nextImage()
      commands.nextImage()

      expect(queries.currentImage()).toEqual('finalImage')
    })
  })
})