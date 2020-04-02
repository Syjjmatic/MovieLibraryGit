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
            // before: function(data){
            //     alert("Before Send Alert")
            // },
            success: function( data, textStatus, jQxhr ){
                $("#my-form input[type ='text']").val('');
                alert("Success");
                getMovies();
            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();
       }
  
        function updateMovieDeets( e ){
            var movie = {
                movieId: parseInt(this["movieId"]).value,
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
                
                success: function( data ){
                    alert("Success");
                    $("#edit-form input[type ='text']").val('');
                   getMovies();
                },
                error: function( errorThrown ){
                    console.log( errorThrown );
                }
            });
    
            e.preventDefault();
        }
        $('#movies').html(getMovies);
        $('#my-form').submit( processForm );
        $('#edit-form').submit(updateMovieDeets);
    
       
})(jQuery);
function getMovies(){
    $.ajax({
      url: 'https://localhost:44325/api/movie',
      dataType: 'json',
      type: 'GET',
      contentType: 'application/json',
      success: function (data){
        $("#movies").empty();
        $.each(data, function(i,item){
          var movie = "<tr>" +
          "<td>" + item['title'] + "</td>" +
          "<td>" + item['director'] + "</td>" +
          "<td>" + item['genre'] + "</td>" +
          "<td>" + "<button onclick=edit("+item['movieId']+") id='editMovie'>Edit</button>" + "</td>"+
          "<td>" + "<button onclick=deleteMovie("+item['movieId']+") id='deleteMovie'>Delete</button>" + "</td>"+
          "</tr>";
          $("#movies").append(movie);
          
        });
      }
    });
  };
  
function getMovieDeets(id) {
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        data: JSON.stringify(movie),
        
        success: function( data, textStatus, jQxhr ){
            alert("Success");
            $("#edit-form input[name ='movieId']").val(data['movieId']);
            $("#edit-form input[type ='title']").val(data['title']);
            $("#edit-form input[type ='genre']").val(data['genre']);
            $("#edit-form input[type ='director']").val(data['director']);
           
        },
        error: function(  errorThrown ){
            console.log( errorThrown );
        }
    });

    e.preventDefault();
}
function deleteMovie(id){
    $.ajax({
      url: 'https://localhost:44325/api/movie',
      dataType: 'json',
      type: 'delete',
      contentType: 'application/json',
      data: JSON.stringify(id),
      success: function(data){
          alert("Movie deleted!")
          $('#movies').html(getMovies);
      },
      error: function(errorThrown){
          console.log(errorThrown);
      }
    });
  }




   