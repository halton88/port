require <[ jquery ang.ngRoute bootstrap ]> ($) ->

	'use strict'
	
	((angular) !->

		angular.module( \port [ \ngRoute ])
		.value \port
		.controller \baseController ($scope, $route, $routeParams, $location) !->
			$scope.$route = $route
			$scope.$location = $location
			$scope.$routeParams = $routeParams
		.controller \homeController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \resumeController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \chartsController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \contactController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \updatedController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \originalController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \videoEditController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.config ($routeProvider, $locationProvider) !->
			$locationProvider.html5Mode(
				\enabled : no
				\require-base : no
			)

			$routeProvider
				.when "/",
					template-url: "templates/pages/home.html"
					controller : \homeController
					title: \Welcome
					page-class: \home
				.when "/contact",
					template-url: "templates/pages/contact.html"
					controller : \contactController
					title: \Contact
					page-class: \contact
				.when "/as-flash",
					controller : \baseController
					template-url: \templates/pages/as-flash.html
					title: 'ActionScript & Flash'
				.when "/themes",
					template-url: \templates/pages/web/themes.html
					controller : \themesController
					title: 'HTML Themes (w/ CSS3)'
					page-class: \themes
				.when "/sp-original",
					template-url: \templates/pages/sp-original.html
					controller : \originalController
					title: 'Senior Capstone'
					page-class: \original-sp
				.when "/sp-updated",
					template-url: \templates/pages/sp-updated.html
					controller : \updatedController
					title: 'Updated Senior Capstone Application'
					page-class: \updated-sp
				.when "/resume",
					template-url: \templates/pages/resume.html
					controller : \resumeController
					title: \Resume
					page-class: \resume
				.when "/work-samples/charts",
					template-url: \templates/pages/work-samples/high-charts.html
					controller : \chartsController
					title: 'Highcharts Examples'
					page-class: \charts
				.when "/work-samples/data-tables",
					template-url: \templates/pages/work-samples/data-tables.html
					controller : \datatableController
					title: 'Datatables Examples'
					page-class: \datatables-services
				.when "/video-edit",
					template-url: \templates/pages/video-editing.html
					controller : \videoEditController
					title:'Video Creation & Editing'
					page-class: \video-edit
				.otherwise "/",
					template-url: \templates/pages/home.html
					controller : \homeController
					title: \Welcome
					page-class: \home
		.run( 
			($location, $rootScope) !->
				$rootScope.$on( 
								\$routeChangeSuccess
								(event, current, previous) !->
									#check for route existance
									if current.hasOwnProperty \$$route
										#assign title and page class values
										$rootScope.title = current.$$route.title
										$rootScope.pageClass = current.$$route.pageClass )
		)
		
		angular.bootstrap(document, [ \port ])
		
	) (window.angular)