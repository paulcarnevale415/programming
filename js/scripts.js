$(document).ready(function() {
  $("#form-group").submit(function() {
    $(".person1").append("blah blah");
    $(".person2").append("blah blah");
    $(".animal").append("blah blah");
    $(".exclamation").append("blah blah");
    $(".verb").append("blah blah");
    $(".noun").append("blah blah");

    $("#story").show();

    event.preventDefault();
  });
});
