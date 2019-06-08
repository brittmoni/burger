$('.add-burger').on('submit', function(event) {
  event.preventDefault();
  
  $.ajax('/api/burgers', {
    type: 'POST',
    data: newBurger
  }).then(
    function() {
      console.log('New burger added');
    }
  )
})