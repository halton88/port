(function(){
  (function(factory){
    if (typeof define === 'function' && define.amd) {
      define(['jquery', 'jquery-ui'], factory);
    } else {
      factory(jQuery);
    }
  }).call(this, function($){
    return require(['ang.ngRoute', 'app.controller'], function(){});
  });
}).call(this);
