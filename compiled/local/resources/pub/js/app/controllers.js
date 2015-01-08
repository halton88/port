(function(){
  require(['jquery', 'ang.ngRoute', 'bootstrap'], function($){
    'use strict';
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
      }).config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
          'enabled': false,
          'require-base': false
        });
        $routeProvider.when("/", {
          templateUrl: "templates/pages/home.html",
          controller: 'homeController',
          title: 'Welcome',
          pageClass: 'home'
        }).when("/contact", {
          templateUrl: "templates/pages/contact.html",
          controller: 'contactController',
          title: 'Contact',
          pageClass: 'contact'
        }).when("/as-flash", {
          controller: 'baseController',
          templateUrl: 'templates/pages/as-flash.html',
          title: 'ActionScript & Flash'
        }).when("/themes", {
          templateUrl: 'templates/pages/web/themes.html',
          controller: 'themesController',
          title: 'HTML Themes (w/ CSS3)',
          pageClass: 'themes'
        }).when("/sp-original", {
          templateUrl: 'templates/pages/sp-original.html',
          controller: 'originalController',
          title: 'Senior Capstone',
          pageClass: 'original-sp'
        }).when("/sp-updated", {
          templateUrl: 'templates/pages/sp-updated.html',
          controller: 'updatedController',
          title: 'Updated Senior Capstone Application',
          pageClass: 'updated-sp'
        }).when("/resume", {
          templateUrl: 'templates/pages/resume.html',
          controller: 'resumeController',
          title: 'Resume',
          pageClass: 'resume'
        }).when("/work-samples/charts", {
          templateUrl: 'templates/pages/work-samples/high-charts.html',
          controller: 'chartsController',
          title: 'Highcharts Examples',
          pageClass: 'charts'
        }).when("/work-samples/data-tables", {
          templateUrl: 'templates/pages/work-samples/data-tables.html',
          controller: 'datatableController',
          title: 'Datatables Examples',
          pageClass: 'datatables-services'
        }).when("/video-edit", {
          templateUrl: 'templates/pages/video-editing.html',
          controller: 'videoEditController',
          title: 'Video Creation & Editing',
          pageClass: 'video-edit'
        }).otherwise("/", {
          templateUrl: 'templates/pages/home.html',
          controller: 'homeController',
          title: 'Welcome',
          pageClass: 'home'
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
