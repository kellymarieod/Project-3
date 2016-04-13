// alert("It's working!")


$(document).ready( function() {
  $(".sendf").click( function() {
    $(".convocontent").append(" <a href='Scene2/Scene2.html'><p class='her'>When will you be in town again? It'd be great to see you sometime.</p></a>");
  });
  $(".sendm").click( function() {
    $(".convocontent").append(" <a href='Scene2/Scene2.html'><p class='him'>So... I'm coming home next week for the long weekend. Want to grab a cup of coffee?</p></a>");
  });
});
