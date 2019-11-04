export default function ThreeSixtyInteraction() {

  const images = []
  let selectedImage = 0

  function nextImage() {
    if (selectedImage < images.length - 1) {
      selectedImage++
    }
    return selectedImage
  }

  function previousImage() {
    if (selectedImage > 0) {
      selectedImage--
    }
    return selectedImage
  }

  function addImage(image) {
    images.push(image)
  }

  function currentImage() {
    return images[selectedImage]
  }

  // useDomainModel interface implementation put here for convenience, can be extracted for purity
  // TODO we should extract this into a TS interface of sorts
  return {
    hash: () => require('object-hash')({images, selectedImage}),
    commands: {addImage, nextImage, previousImage},
    queries: {currentImage},
  }
}
