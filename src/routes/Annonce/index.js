export default (store) => ({
  path: '/annonce/:id',
  getComponent (nextState, next) {
    require.ensure([
      './containers/AnnonceContainer',
      // './modules/CreateAnnonce'
    ], (require) => {
      const Annonce = require('./containers/AnnonceContainer').default
      // const createAnnonceReducer = require('./modules/CreateAnnonce').default
      // injectReducer(store, {
      //   key: 'Annonces',
      //   reducer: createAnnonceReducer
      // })

      next(null, Annonce)
    })
  }
})
