export default (store) => ({
  path: 'create/annonce',
  getComponent (nextState, next) {
    require.ensure([
      './containers/CreateAnnonceContainer',
      // './modules/CreateAnnonce'
    ], (require) => {
      const createAnnonce = require('./containers/CreateAnnonceContainer').default
      // const createAnnonceReducer = require('./modules/CreateAnnonce').default
      // injectReducer(store, {
      //   key: 'Annonces',
      //   reducer: createAnnonceReducer
      // })

      next(null, createAnnonce)
    })
  }
})
