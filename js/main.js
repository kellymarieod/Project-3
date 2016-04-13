// alert("It's working!")


$(document).ready( function() {
  $(".sendf").click( function() {
    $(".convocontent").append(" <a href='Scene2/Scene2.html' class='her'>When will you be in town again? It'd be great to see you sometime.</a>");
  });
  $(".sendm").click( function() {
    $(".convocontent").append(" <a href='Scene2/Scene2.html' class='him'>So... I'm coming home next week for the long weekend. Want to grab a cup of coffee?</a>");
  });
});
