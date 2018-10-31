function get(){
  var url = $("#url").val();
  var location = getLocation(url);
  $.ajax("/zingmp3"+location.pathname).done(function(value){
    var parsed = $('<div/>').append(value);

    var urlInfo = parsed.find("#zplayerjs-wrapper").attr("data-xml");
    $.ajax("/zingmp3/xhr"+urlInfo).done(function(info){
      $("#download-link").attr("href",info.data.source['128'])
      $("#download-link").text(info.data.source['128'])
    })
  }) 
}

var getLocation = function(href) {
  var l = document.createElement("a");
  l.href = href;
  return l;
};
$(function(){
  $("#url").val('https://mp3.zing.vn/bai-hat/Dung-Quen-Ten-Anh-Hoa-Vinh/ZW9C8FDB.html')
})
// var l = getLocation("http://example.com/path");