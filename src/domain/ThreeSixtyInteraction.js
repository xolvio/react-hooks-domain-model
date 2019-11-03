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

  function rotateLeft() {
    return images[nextImage()]
  }

  function rotateRight() {
    return images[previousImage()]
  }

  // useDomainModel interface implementation put here for convenience, can be extracted for purity
  return {
    hash: () => require('object-hash')({images, selectedImage}),
    mutations: {addImage, rotateLeft, rotateRight},
    queries: {currentImage},
  }
}
