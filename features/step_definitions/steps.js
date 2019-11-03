import {Given, Then, When} from 'cucumber'
import expect from 'expect'
import ThreeSixtyInteraction from '../../src/domain/ThreeSixtyInteraction'

const {queries, mutations} = ThreeSixtyInteraction()

Given('the component has had images authored', function () {
  mutations.addImage('firstImage.jpg')
  mutations.addImage('secondImage.jpg')
})

When('a user swipes the vehicle image to the left', function () {
  mutations.rotateLeft()
})

Then('the vehicle image is rotated to the left with no inertia', function () {
  expect(queries.currentImage()).toEqual('secondImage.jpg')
})
