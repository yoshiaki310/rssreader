angular.module('rssreader', [
  'ionic',
  'ngCordova',
  'ngResource',
  'rssreader.controllers',
  'rssreader.RssCtrl'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
        cordova.plugins.Keyboard.disableScroll(true)
      }
      if (window.StatusBar) {
        StatusBar.styleDefault()
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        templateUrl: 'templates/rss.html',
        controller: 'RssCtrl'
      })

    $urlRouterProvider.otherwise('/app')
  })
