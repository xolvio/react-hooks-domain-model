import {useState} from 'react'

export default function useDomainModel(model) {
  const domainModel = {mutations: {}, queries: {}}

  // queries get delegated since they don't update state
  Object.keys(model.queries).forEach(
    (query) =>
      domainModel.queries[query] = (...args) =>
        model.queries[query].apply(model, args)
  );

  // mutations use a hash to see if the model has changes
  Object.keys(model.mutations).forEach((mutation) => {
    const [hash, stateChange] = useState(model.hash())
    domainModel.mutations[mutation] = (...args) => {
      const mutationOutput = model.mutations[mutation].apply(model, args)
      stateChange(model.hash())
      return mutationOutput
    }
  });

  return domainModel
}