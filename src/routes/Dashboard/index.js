export default (store) => ({
  path: 'dashboard',
  getComponent (nextState, next) {
    require.ensure([
      './containers/DashboardContainer',
      // './modules/CreateAnnonce'
    ], (require) => {
      const dashboard = require('./containers/DashboardContainer').default
      next(null, dashboard)
    })
  }
})
