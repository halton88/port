(function(){
  require(['jquery', 'ang.ngRoute', 'bootstrap'], function($){
    'use strict';
    var loadScripts;
    loadScripts = function($mod){
      var i$, to$, i, results$ = [];
      for (i$ = 0, to$ = $mod.length; i$ <= to$; ++i$) {
        i = i$;
        results$.push(require([$mod[i]]));
      }
      return results$;
    };
    return function(angular){
      angular.module('port', ['ngRoute']).value('port').controller('baseController', function($scope, $route, $routeParams, $location){
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
      }).controller('homeController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('resumeController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('chartsController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('contactController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('updatedController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('originalController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('videoEditController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('datatableController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('themesController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).controller('flashController', function($scope, $routeParams){
        $scope.$routeParams = $routeParams;
      }).config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
          'enabled': false,
          'require-base': false
        });
        $routeProvider.when("/", {
          templateUrl: "templates/pages/home.html",
          controller: 'homeController',
          title: 'Welcome',
          pageClass: 'home',
          scripts: loadScripts(['home'])
        }).when("/contact", {
          templateUrl: "templates/pages/contact.html",
          controller: 'contactController',
          title: 'Contact',
          pageClass: 'contact',
          scripts: loadScripts(['contact'])
        }).when("/web/as-flash", {
          controller: 'flashController',
          templateUrl: 'templates/pages/web/as-flash.html',
          title: 'ActionScript & Flash',
          pageClass: 'as-flash',
          scripts: loadScripts(['as-flash'])
        }).when("/web/themes", {
          templateUrl: 'templates/pages/web/themes.html',
          controller: 'themesController',
          title: 'HTML Themes (w/ CSS3)',
          pageClass: 'themes',
          scripts: loadScripts(['themes'])
        }).when("/web/original-sp", {
          templateUrl: 'templates/pages/web/original-sp.html',
          controller: 'originalController',
          title: 'Original Senior Capstone',
          pageClass: 'original-sp',
          scripts: loadScripts(['original-sp'])
        }).when("/web/updated-sp", {
          templateUrl: 'templates/pages/web/updated-sp.html',
          controller: 'updatedController',
          title: 'Updated Senior Capstone Application',
          pageClass: 'updated-sp',
          scripts: loadScripts(['updated-sp'])
        }).when("/resume", {
          templateUrl: 'templates/pages/resume.html',
          controller: 'resumeController',
          title: 'Resume',
          pageClass: 'resume',
          scripts: loadScripts(['resume'])
        }).when("/work-samples/charts", {
          templateUrl: 'templates/pages/work-samples/high-charts.html',
          controller: 'chartsController',
          title: 'Highcharts Examples',
          pageClass: 'charts',
          scripts: loadScripts(['charts'])
        }).when("/work-samples/data-tables", {
          templateUrl: 'templates/pages/work-samples/data-tables.html',
          controller: 'datatableController',
          title: 'Datatables Examples',
          pageClass: 'datatable-services',
          scripts: loadScripts(['datatable-services'])
        }).when("/video-edit", {
          templateUrl: 'templates/pages/video-editing.html',
          controller: 'videoEditController',
          title: 'Video Creation & Editing',
          pageClass: 'video-edit',
          scripts: loadScripts(['video-edit'])
        }).otherwise("/", {
          templateUrl: 'templates/pages/home.html',
          controller: 'homeController',
          title: 'Welcome',
          pageClass: 'home',
          scripts: loadScripts(['home'])
        });
      }).run(function($location, $rootScope){
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
          if (current.hasOwnProperty('$$route')) {
            $rootScope.title = current.$$route.title;
            $rootScope.pageClass = current.$$route.pageClass;
          }
        });
      });
      angular.bootstrap(document, ['port']);
    }(window.angular);
  });
}).call(this);
