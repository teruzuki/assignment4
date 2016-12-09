// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user type
 (function(){
 	$("#result").hide();
 })();

 $(function() {
  $(".flexsearch-input").on("input", function() {
      var myInput = $(".flexsearch-input").val();
      if(myInput.length > 0){
        $("#results").show();
        $.ajax({
          dataType: "json",
          url: "http://www.mattbowytz.com/simple_api.json?data=all",
          success: function(outResult){
            $.each(outResult.data, function(key1, value1){
              $.each(value1, function(key2, value2){

              	valueLC = value2.toLowerCase();

                if(valueLC.search(myInput) > -1){
                  $("#results").append("<li>"+value2+"</li>");
                }
              })
            })
          }
        });
      }
      else {
        $("#results").html("");
        $("#results").hide();
      }
  });
 });
