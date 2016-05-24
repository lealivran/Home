'use strict';

angular.module('homeApp.auth', ['homeApp.constants', 'homeApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
