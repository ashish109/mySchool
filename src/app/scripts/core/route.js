/**
 *ROUTE CONFIGURATIONS    
 */

'use strict';

angular.module("sampleApp").config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/templates/home.html'
        })

    $urlRouterProvider.otherwise('/home');

}]);
