import {useState} from 'react'

export default function useDomainModel(model) {
  const [, stateChange] = useState(model.hash())

  const domainModel = {queries: {}, commands: {}}

  // queries get delegated since they don't update state
  Object.keys(model.queries).forEach((query) =>
    domainModel.queries[query] = model.queries[query]
  )

  // commands use a hash to see if the model has changes
  Object.keys(model.commands).forEach((mutation) => {
    domainModel.commands[mutation] = (...args) => {
      model.commands[mutation].apply(model, args)
      stateChange(model.hash())
    }
  })

  return [domainModel.queries, domainModel.commands]
}

// TODO rewrite this to use Types, to provide an interface for commands/queries & hash, TDD it, and publish as an npm module
