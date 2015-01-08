(function(){
  require(['jquery'], function(){
    var loaderIn, loaderOut;
    loaderIn = function(){
      $('#main,nav').fadeOut('100');
      $('#main,nav').addClass('hidden');
      $('#overlay').fadeIn('100');
      $('#overlay').removeClass('hidden');
    };
    loaderOut = function(){
      $('#overlay').fadeOut('100');
      $('#main, nav').removeClass('hidden');
      $('#main,nav').fadeIn('100');
      $('#overlay').addClass('hidden');
    };
    return {
      loaderIn: loaderIn,
      loaderOut: loaderOut
    };
  });
}).call(this);
