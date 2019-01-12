$('#new-message').hide()

$('.plus-button').on('click', function(){
    $('#display-form').hide()
    $('#new-message').show()
})

$('.cancel-button').on('click', function(){
    $('#display-form').show()
    $('#new-message').hide()
})