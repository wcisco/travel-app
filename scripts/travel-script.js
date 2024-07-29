$( document ).ready(function() {
    console.log( "Ready!" );
    loadSpots("places");


    $('#places li').on('click', (e)=>{
        let $this = $(e.target);
        console.log($this.attr('id'));
    });

    // issue one load places
    // $('#btnLoad').click(function()
    // {
        
    //     $('#places').slideToggle(2000).empty();

    //     console.log("clicked load songs");
    //     console.log('more lines of code');

        
        

    //     $(places).each(function(index,value) {
    //         $('#places').append(`<li class="list-group-item"> ${places[index]} </li>`);
    //     });

    // });

    // // issue clear songs
    // $('#btnClear').on('click', function(){
    //     $('#places').slideToggle(2000).empty();
    // });

    // let places = [
    //     "Salamanca, Spain", "Kailua, Hawaii", "New Orleans, Louisiana", "Nassau, Bahamas",
    //     "Mirmar Beach, Florida", "West Yellowstone, Montana", "Orlando, Florida", "Sandusky, Ohio", 
    //     "Chicago, Illinois", "St. Louis, Missouri"
    // ];
    
        
});

function loadSpots(appendId) {
    let appendElement = $(`#${appendId}`);

    appendElement.empty();

    $.each(data.spots, (index, element)=>{
        // $('<li>')
        //     .attr('id', `spotNo${index}`)
        //     .addClass('list-group-item')
        //     .addClass('list-group-item-action')
        //     .html(`${element.city}, <em>${element.country}</em>`)
        //     .appendTo(appendElement);
        
    });
}