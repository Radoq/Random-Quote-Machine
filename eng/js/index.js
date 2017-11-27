$("#new-quote").on("click", function() {
    $.ajax({
        type: "GET",
        success: function(data) {
            var quote = $(data).find("#quote");
            var author = $(data).find("#author");
            $("#quote").html(quote);
            $("#author").html(author);
        }
    });
});