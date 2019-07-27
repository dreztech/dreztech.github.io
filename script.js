$(document).ready(function(){
    // pull random quote into var
    // put to H1

    // $.get('drezquotes.txt', function(txt) {
    //     var lines = txt.responseText.split("\n");
    //     var randLineNum = Math.floor(Math.random() * lines.length);
    //     $("#drezquote").text(lines[randLineNum]); 
    // });

    // $.get('drezquotes.txt', function(data) {
    //     var quotes = data.split("\n");
    //     var idx = Math.floor(quotes.length * Math.random());
    //     $('#drezquote').html(quotes[idx]);
    // });

   // $("h1").text(randomQuote( "drezquotes.txt"));

  //  $("#drezquote").click(function() { });
  $("#drezquote").load("drezquotes.txt");

});