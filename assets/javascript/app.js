
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   var giphyImage = response.data[0];
//   var image = $('<img src="'+ giphyImage.images.original.url +'">')
//   $(".container").append(image);
//   console.log(response);
// });



var topics = ['bill murray', 'arrested development']

for (var i=0; i < topics.length; i++){
    $('#buttonDisplay').append('<button id="button">' + topics[i] +'</button>');
}
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=Y1tkMOekG2cWIZ0qoTck56KQ370bQE73";
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
    var giphyImage = response.data[0];
    var image = $('<img src="'+ giphyImage.image.original.url +'">');
    $('#gifDisplay').prepend(image);
})


// $('#buttonDisplay').text(this.response);
// $('#gifDisplay').append();