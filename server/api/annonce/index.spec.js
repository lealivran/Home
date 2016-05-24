'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var annonceCtrlStub = {
  index: 'annonceCtrl.index',
  show: 'annonceCtrl.show',
  create: 'annonceCtrl.create',
  update: 'annonceCtrl.update',
  destroy: 'annonceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var annonceIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './annonce.controller': annonceCtrlStub
});

describe('Annonce API Router:', function() {

  it('should return an express router instance', function() {
    annonceIndex.should.equal(routerStub);
  });

  describe('GET /api/annonces', function() {

    it('should route to annonce.controller.index', function() {
      routerStub.get
        .withArgs('/', 'annonceCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/annonces/:id', function() {

    it('should route to annonce.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'annonceCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/annonces', function() {

    it('should route to annonce.controller.create', function() {
      routerStub.post
        .withArgs('/', 'annonceCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/annonces/:id', function() {

    it('should route to annonce.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'annonceCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/annonces/:id', function() {

    it('should route to annonce.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'annonceCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/annonces/:id', function() {

    it('should route to annonce.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'annonceCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
