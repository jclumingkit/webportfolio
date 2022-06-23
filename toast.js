$('form').on('submit', function(event){
    event.preventDefault();
    $('.modal').modal('hide');
    $('.toast').toast('show');
    $('form').trigger('reset');
})
