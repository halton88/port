require <[ jquery ang.ngRoute bootstrap ]> ($) ->

	'use strict'

	load-scripts = ($mod) ->
		for i from 0 to $mod.length
			require [ $mod[i] ]

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
		.controller \datatableController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \themesController ($scope, $routeParams) !->
			$scope.$routeParams = $routeParams
		.controller \flashController ($scope, $routeParams) !->
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
					scripts: load-scripts([\home ])
				.when "/contact",
					template-url: "templates/pages/contact.html"
					controller : \contactController
					title: \Contact
					page-class: \contact
					scripts: load-scripts([\contact ])
				.when "/web/as-flash",
					controller : \flashController
					template-url: \templates/pages/web/as-flash.html
					title: 'ActionScript & Flash'
					page-class: \as-flash
					scripts: load-scripts([\as-flash ])
				.when "/web/themes",
					template-url: \templates/pages/web/themes.html
					controller : \themesController
					title: 'HTML Themes (w/ CSS3)'
					page-class: \themes
					scripts: load-scripts([\themes ])
				.when "/web/original-sp",
					template-url: \templates/pages/web/original-sp.html
					controller : \originalController
					title: 'Original Senior Capstone'
					page-class: \original-sp
					scripts: load-scripts([\original-sp ])
				.when "/web/updated-sp",
					template-url: \templates/pages/web/updated-sp.html
					controller : \updatedController
					title: 'Updated Senior Capstone Application'
					page-class: \updated-sp
					scripts: load-scripts([\updated-sp ])
				.when "/resume",
					template-url: \templates/pages/resume.html
					controller : \resumeController
					title: \Resume
					page-class: \resume
					scripts: load-scripts([\resume ])
				.when "/work-samples/charts",
					template-url: \templates/pages/work-samples/high-charts.html
					controller : \chartsController
					title: 'Highcharts Examples'
					page-class: \charts
					scripts: load-scripts([\charts ])
				.when "/work-samples/data-tables",
					template-url: \templates/pages/work-samples/data-tables.html
					controller : \datatableController
					title: 'Datatables Examples'
					page-class: \datatable-services
					scripts: load-scripts([\datatable-services ])
				.when "/video-edit",
					template-url: \templates/pages/video-editing.html
					controller : \videoEditController
					title:'Video Creation & Editing'
					page-class: \video-edit
					scripts: load-scripts([\video-edit ])
				.otherwise "/",
					template-url: \templates/pages/home.html
					controller : \homeController
					title: \Welcome
					page-class: \home
					scripts: load-scripts([\home ])
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