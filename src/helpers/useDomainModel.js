import {useState, useRef} from 'react'

export default function useDomainModel(model) {
  const [, stateChange] = useState(model.hash())
  const commandsHistoryRef = useRef()

  // initialize ref
  if (!commandsHistoryRef.current) {
    commandsHistoryRef.current = []
  }

  const commandsHistory = commandsHistoryRef.current

  const domainModel = {queries: {}, commands: {}}

  // queries get delegated since they don't update state
  Object.keys(model.queries).forEach((query) =>
    domainModel.queries[query] = model.queries[query]
  )

  // commands use a hash to see if the model has changes
  Object.keys(model.commands).forEach((command) => {
    domainModel.commands[command] = (...args) => {
      // TODO maybe deep copy model here to include on the commandsHistory
      model.commands[command].apply(model, args)
      commandsHistory.push({ command, args, id: commandsHistory.length })
      stateChange(model.hash())
    }
  })

  return [domainModel.queries, domainModel.commands, commandsHistory]
}

// TODO rewrite this to use Types, to provide an interface for commands/queries & hash, TDD it, and publish as an npm module
