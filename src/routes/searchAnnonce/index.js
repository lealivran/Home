export default (store) => ({
  path: 'search',
  getComponent (nextState, next) {
    require.ensure([
      './containers/SearchContainer'
    ], (require) => {
      const search = require('./containers/SearchContainer').default
      next(null, search)
    })
  }
})
