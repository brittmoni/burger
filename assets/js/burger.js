$(function() {
  $('.add-burger').on('submit', function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#new-burger').val().trim(),
      devoured: false
    };
    
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('New burger added');
        location.reload();
      }
    );
  });
});
