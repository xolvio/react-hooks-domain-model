// Since this interaction object is abstract, it can be used by React, or a speech UI, or a camera gesture UI etc

export default class ThreeSixtyInteraction {
  constructor() {
    this.images = []
    this.selectedImage = 0
  }

  nextImage() {
    if (this.selectedImage < this.images.length - 1) {
      this.selectedImage++
    }
  }

  previousImage() {
    if (this.selectedImage > 0) {
      this.selectedImage--
    }
  }

  addImage(image) {
    this.images.push(image)
  }

  currentImage() {
    return this.images[this.selectedImage]
  }
}