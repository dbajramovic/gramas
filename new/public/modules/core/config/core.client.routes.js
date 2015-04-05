'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/contact');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
            state('contact', {
                url: '/contact',
                templateUrl:'modules/core/views/contact.client.view.html'
            })
            .state('2-column', {
                url:'/2-column',
                templateUrl:'modules/core/views/2-column.client.view.html'
            })
            .state('about', {
                url:'/about',
                templateUrl:'modules/core/views/about.client.view.html'
            })
            .state('start', {
                url:'/start',
                templateUrl:'modules/core/views/start.client.view.html'
            })
            .state('startcamera', {
                url:'/startcamera',
                templateUrl:'modules/core/views/startcamera.client.view.html'
            })
            .state('services', {
                url:'/services',
                templateUrl:'modules/core/views/services.client.view.html'
            })
            .state('portfolio', {
                url:'/portfolio',
                templateUrl:'modules/core/views/portfolio.client.view.html'
            });
	}
]);
