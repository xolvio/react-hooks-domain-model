# 360 Component

`npm install`
No surprises here.

`npm test`
This will two things:
1. Run Jest: Within the interaction domain context, the unit tests focus on the permutations and the more mundane implementation details of the interaction model such as making sure we don't return null when we reach the end of an array and so on. 

2. Run Cucumber: This focuses on the complex parts of the interaction model. The idea here is that the interaction domain is where a lot of the complexity is, so modeling and testing the interaction in isolation without the complications of the UI will make it easier to reason about and evolve it.

 

`npm run storybook`
Here you an see component rendered by React, and hooks are being used to "bind" the interaction domain model to the React component.

A few key points here:

* Take a look at the files under the `./features` directory for the BDD bits 

* The `ThreeSixtyInteraction` is hooked into React using the `useDomainModel` hook. The interface for this to happen looks as follows:
```javascript
  return {
    hash: () => require('object-hash')({images, selectedImage}),
    commands: {addImage, rotateLeft, rotateRight},
    queries: {currentImage},
  }
```

The hash is used to provide the `useDomainModel` hook with the knowledge if the model has changed. It's up to the developer to ensure the hashcode returns a unique value for the object state. The `object-hash` library does a great job of doing this if you pass it the attributes of the model. 

The commands are wired in by the `useDomainModel` such that any commands call results in a rerender of the hooked react component.

The queries are delegated as is without any hooks since reading a value should not require a rerender.
