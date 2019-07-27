$(document).ready(function(){
    
    $.get('drezquotes.txt', function(txt) {
        var lines = txt.responseText.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        $("#drezquote").text(lines[randLineNum]); // random line from the text file
    });

});