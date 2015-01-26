(function(){
  require([], function(){
    $('.thumb').on('click', function(){
      $('#img-preview').attr('src', $(this).children().attr('src'));
      $('#img-modal').modal('show');
    });
  });
}).call(this);
