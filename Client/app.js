(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
          Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $("response").html( JSON.stringify(dict) );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        $.ajax({
          url: 'https://localhost:44325/api/movie',
          dataType: 'json',
          type: 'get',
          contentType: 'application/json',
          data: JSON.stringify(dict),
          success: function(){

          },
          error: function (jqXhr, textStatus, errorThrown){
            console.log( errorThrown );
          }


        })

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);
