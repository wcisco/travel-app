$( document ).ready(function() {
    console.log( "Ready!" );

    // issue one load places
    $('#btnLoad').click(function()
    {
        
        $('#places').slideToggle(2000).empty();

        console.log("clicked load songs");
        console.log('more lines of code');

        
        //$('#placeList').append(`<li class="list-group-item"> ${ places[0] } </li>`);

        // for loop
        // for (i = 0; i < places.length; i++)
        // {
        //     $('#places').append(`<li class="list-group-item>${ places[i]}</li>`);
        // }

        // $.each(places, function(){
        //     $('#places').append("cat");

        // })

        $(places).each(function(index,value) {
            $('#places').append(`<li class="list-group-item"> ${places[index]} </li>`);
        });

    });

    // issue clear songs
    $('#btnClear').on('click', function(){
        $('#places').slideToggle(2000).empty();
    });

    let places = [
        "Salamanca, Spain", "Kailua, Hawaii", "New Orleans, Louisiana", "Nassau, Bahamas",
        "Mirmar Beach, Florida", "West Yellowstone, Montana", "Orlando, Florida", "Sandusky, Ohio", 
        "Chicago, Illinois", "St. Louis, Missouri"
    ];
    
        
});
