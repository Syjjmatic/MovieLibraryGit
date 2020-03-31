(function($){
    function processForm( e ){
        var dict = {
<<<<<<< HEAD
            Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value
=======
        	Title : this["title"].value,
        	Director: this["director"].value,
          Genre: this["genre"].value
>>>>>>> 34c52985da145364573062679d125b2fe2103ea8
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);
<<<<<<< HEAD




=======
>>>>>>> 34c52985da145364573062679d125b2fe2103ea8
