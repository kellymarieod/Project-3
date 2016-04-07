// alert("It's working!")


$(document).ready( function() {
  $(".sendf").click( function() {
    $(".convocontent").append(" <a href='Scene2/Scene2.html' class='her'>Sup</a>");
  });
  $(".sendm").click( function() {
    $(".convocontent").append(" <a href='Scene2/Scene2.html' class='him'>Hi</a>");
  });
});
