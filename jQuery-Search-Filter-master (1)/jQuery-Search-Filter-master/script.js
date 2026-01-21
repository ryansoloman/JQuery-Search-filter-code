// console.log($);



fetch("./details.json")
    .then((response => response.json()))
    .then(data => {
        var user = "";
        data.forEach(element => {
            user += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
        </tr>
        `
            document.getElementById("table_body").innerHTML = user;
        })
    });


$(document).ready(() => {
    $("#inputSearch").keyup(() => {
        var searchField = $("#inputSearch").val().toLowerCase();
        $("#table_body").empty();

        $.getJSON("./details.json", function (data) {
            var filteredData = data.filter(function (product) {
                return (product.name.toLowerCase().includes(searchField) ||  product.email.toLowerCase().includes(searchField));
            });

            if (filteredData.length > 0) {
                $.each(filteredData, function (key, value) {
                    $("#table_body").append(`
                    <tr>
                        <td>${value.id}</td>
                        <td>${value.name}</td>
                        <td>${value.email}</td>
                    </tr>     
                `);
                });
                console.log("If statement")
            } else {
                $("table_body").append('<p>No User found</p>');
                console.log("Else statement")
            }
        })
    })
})