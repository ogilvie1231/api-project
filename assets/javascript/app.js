var topics = ['it&#39s always sunny in philedelphia', 'arrested development', 'the simpsons', 'king of the hill', 'flight of the conchords', 'the office', 'the league', 'workaholics', 'bobs burgers', 'parks and rec']



function buttonCreate() {
    $('#buttonDisplay').empty();
    for (var i = 0; i < topics.length; i++) {
        $('#buttonDisplay').append('<button class="button">' + topics[i] + '</button>');
    }
}

buttonCreate();

$("#find-gif").on("click", function(event) {

    event.preventDefault();

    var searchTerm = $("#gif-input").val().trim();
    console.log('search input: ' + searchTerm);
    gifFinder(searchTerm)
    topics.push(searchTerm);
    $("#titleDisplay").html('<h1>' + searchTerm + '</h1>');
    buttonCreate();



});

$(document).on('click', '.button', function() {
    var getButton = $(this).text();
    console.log('button info: ' + getButton);
    gifFinder(getButton);





});

$(document).on('click', '.gif', function() {
    var first = $(this).attr('src');
    var second = $(this).attr('otherURL');
    $(this).attr('src', second);
    $(this).attr('otherURL', first);

});


function gifFinder(searchTerm) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        searchTerm + "&api_key=Y1tkMOekG2cWIZ0qoTck56KQ370bQE73&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        $('#gifDisplay').empty();
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $('<div>');

            var p = $('<p>').text('rating: ' + results[i].rating);
            p.attr('class', 'rating')
            console.log('is this working?');

            var gifImage = $('<img>');
            gifImage.attr("src", results[i].images.fixed_height_still.url)
            gifImage.attr("class", "gif");
            gifImage.attr("otherURL", results[i].images.fixed_height.url)



            gifDiv.prepend(gifImage);
            gifDiv.prepend(p);
            console.log(gifImage);
            $("#gifDisplay").prepend(gifDiv);
            $("#titleDisplay").html('<h1>' + searchTerm + '</h1>');
            console.log('gif div: ' + gifDiv)
        };
    });
}