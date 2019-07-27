$(document).ready(function(){
    // pull random quote into var
    // put to H1

    $.get('drezquotes.txt', function(txt) {
        var lines = txt.responseText.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        $("#drezquote").text(lines[randLineNum]); 
    });


});