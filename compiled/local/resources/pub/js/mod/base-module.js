(function(){
  require(['jquery', 'ang.ngRoute', 'bootstrap'], function($){
    var app;
    app = angular.module('port', []).controller('app.Controller', ctrl);
  });
}).call(this);
