$(document).ready(function () {

    var _url = "https://my-json-server.typicode.com/imotD/PWA-Fun/products"

    var dataResults = ''
    var catResults = ''
    var categories = []

    $.get(_url, function (data) {

        $.each(data, function (key, items) {
            _cat = items.catagory

            dataResults += "<div>" +
                "<h3>" + items.name + "</h3>" +
                "<p>" + _cat + "</p>"
            "</div>";
            if ($.inArray(_cat, categories) == -1) {
                categories.push(_cat)
                catResults += "<option '" + _cat + "'>" + _cat + "</option>"
            }
        })
        $('#products').html(dataResults)
        $('#cat_select').html(`<option value='all'>Semua</option> ${catResults}`)
    })

    // Fungsi Filter

    $("#cat_select").on("change", function () {
        updateProduct($(this).val())
    })

    function updateProduct(cat) {

        var dataResults = ''
        var _newUrl = _url

        if (cat != 'all')
            _newUrl = _url + "?catagory=" + cat

        $.get(_newUrl, function (data) {

            $.each(data, function (key, items) {
                _cat = items.catagory

                dataResults += "<div>" +
                    "<h3>" + items.name + "</h3>" +
                    "<p>" + _cat + "</p>"
                "</div>";

            })
            $('#products').html(dataResults)
        })
    }

})