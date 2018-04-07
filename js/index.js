/* Wikipedia search app developed by Pierre Macedo */

function buildURL() {
  var searchinput = $('#texttosearch').val();
  var URL = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + searchinput;

$.ajax ({
  type: "GET",
  url: URL,
  async: false,
  dataType: "json",
  success: function (data) {
    $('#item1').empty();
  for (var i=0; i<10;i++){
    var temp = '<div class="result">' + '<p class="title">' + data[1][i] + '</p>' + '<p class="description">' + data[2][i] + '</p>' + '<p class="link"><a href="' + data[3][i] + '">' + data[3][i] + '</a></p>' + '</div>';
    $('#items').append(temp);;
  }
  },
  error: function(data) { 
        alert(JSON.stringify(data))
  }
  });
  }
$("#texttosearch").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#button").click();
    }
});