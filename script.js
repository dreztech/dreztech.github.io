$(document).ready(function(){


    $.get('drezquotes.txt', function(txt) {
        var lines = txt.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        $("#drezquote").text(lines[randLineNum]); // random line from the text file

        var colors = ['c1','c2','c3','c4'];
        var randColorNum = Math.floor(Math.random() * colors.length);
        $("#wrapper").removeClass().addClass(colors[randColorNum]);
    });

});