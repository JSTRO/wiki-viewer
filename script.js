$(document).ready(function() {

  $('#searchTerm').keydown(function(e) {

    if (e.keyCode === 13) {

      var query = $('#searchTerm').val();

      var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search="+ query + "&format=json&callback=?";

      $.ajax({
        type:"GET",
        url:url,
        async:false,
        dataType: "json",
        success: function(data) {
          //console.log(data);
          $('#output').html('');
          for (i=0; i<data[1].length; i++) {
            $('#output').prepend("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
          }
          
        },
        error: function(errorMessage) {
          alert("Error");
        } 
      });
    }  
  });   
});
