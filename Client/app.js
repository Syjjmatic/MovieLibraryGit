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
            before: function(data){
                alert("Before Send Alert")
            },
            success: function( data, textStatus, jQxhr ){
                $("#my-form input[type ='text']").val('');
                alert("Success");
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    

    }
  
        function updateMovieDeets( e ){
            var movie = {
                movieId: parseInt(this.["movieId"]).value,
                Title : this["title"].value,
                Director: this["director"].value,
                Genre: this["genre"].value
    
            };
    
            $.ajax({
                url: 'https://localhost:44325/api/movie',
                dataType: 'json',
                type: 'put',
                contentType: 'application/json',
                data: JSON.stringify(movie),
                
                success: function( data, textStatus, jQxhr ){
                    alert("Success");
                    $("#edit-form input[type ='text']").val('');
                   displayMovies();
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
    
            e.preventDefault();
        }
       
        $('#my-form').submit( processForm );
        $('#edit-form').submit(updateMovieDeets);
    
       
})(jQuery)

   