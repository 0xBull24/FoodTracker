$(function() {

    // Adding a new burger
    $('#new-burger-button').on('click', function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $('#new-burger').val().trim(),
            devoured: false,
        };

        // Capture blank burgers
        if (newBurger.burger_name == '') {
            newBurger.burger_name = 'Ghost burger'
        }

        // Post to the route
        $.post('/api/burgers', newBurger).then(data => {
            $('#new-burger').val('');
            location.reload();
        });
    });

    // Devouring a burger
    $('.burger-button').on('click', function(event) {
        const burgerId = $(this).data('id')
        const ateBurger = {
            devoured: $(this).data('devoured')
        };

        // Send request to update burger
        $.ajax(`/api/burgers/${burgerId}`, {
            type: 'PUT',
            data: ateBurger
        }).then(data => {
            console.log('We ate the burger');
            location.reload();
        })
    })
});