import {Given, Then, When} from 'cucumber'
import expect from 'expect'
import root from '../../src/root'

const {queries, commands} = root.threeSixtyInteractionModel

Given('the component has had images authored', function () {
  commands.addImage('firstImage.jpg')
  commands.addImage('secondImage.jpg')
})

When('a user swipes the vehicle image to the left', function () {
  commands.nextImage()
})

Then('the vehicle image is rotated to the left with no inertia', function () {
  expect(queries.currentImage()).toEqual('secondImage.jpg')
})
