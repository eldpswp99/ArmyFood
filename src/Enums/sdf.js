const { createStore, applyMiddleware } = window.Redux
function reduxMulti ({dispatch}) {
  return next => action =>
    Array.isArray(action)
      ? action.filter(Boolean).map(dispatch)
      : next(action)
}

// Add middleware to allow our action creators to return functions and arrays
const createStoreWithMiddleware = applyMiddleware(
  reduxMulti,
)(createStore)

const reducer = function(state = 0, action) { 
  return state + 1
}

// Create a store with our application reducer and
// dispatch the INIT action
const store = createStoreWithMiddleware(reducer)


store.subscribe(function() {
  console.log(store.getState())
})

store.dispatch([
  { type: 'FOO' },
  { type: 'BAR' },
])
