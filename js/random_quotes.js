var quotesUrl = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";
var quoteText = "";
var quoteAuthor = "";
var tweetRef = "";

function newQuote() {
  $.ajax({
    headers: {
        'X-Mashape-Key': 'ONiWabxPQrmshLHmuENAaUMxNTx7p1RWBM5jsnFMJhkjxuw35n',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    },
    dataType: "json",
    url: quotesUrl,
    data: {
      format: 'json'
    },
    success: function(data) {
      quoteText = data[0].quote;
      quoteAuthor = data[0].author;
      tweetRef = "https://twitter.com/intent/tweet?text=" + quoteText + " - "+ quoteAuthor;
      var r = Math.floor(Math.random() * 240);
      var g = Math.floor(Math.random() * 240);
      var b = Math.floor(Math.random() * 240);

      $("#quote-box blockquote").html(
        "<p>"+ quoteText +"</p><footer class='blockquote-footer'>"+ quoteAuthor +"</footer>"
      );
      $("#quote-box blockquote").css("border-left-color", "rgb(" + r + "," + g + "," + b +")")
      $("#quote-box blockquote footer").css("color", "rgb(" + r + "," + g + "," + b +")")
      $("#quote-box .btn").css("background-color", "rgb(" + r + "," + g + "," + b +")")
      $(".twitter-share-button").attr("href",tweetRef);
    }
  })
};

$(document).ready(function() {
  newQuote();
  $('#newQuote').on("click", newQuote);
});
