import {useState} from 'react'

export default function useDomainModel(model) {
  const [, stateChange] = useState(model.hash())

  const domainModel = {queries: {}, mutations: {}}

  // queries get delegated since they don't update state
  Object.keys(model.queries).forEach((query) =>
    domainModel.queries[query] = model.queries[query]
  )

  // mutations use a hash to see if the model has changes
  Object.keys(model.mutations).forEach((mutation) => {
    domainModel.mutations[mutation] = (...args) => {
      const mutationOutput = model.mutations[mutation].apply(model, args)
      const newHash = model.hash()
      stateChange(newHash)
      return mutationOutput
    }
  })

  return [domainModel.queries, domainModel.mutations]
}