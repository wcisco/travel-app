$( document ).ready(function() {
    console.log( "Ready!" );
    loadSpots("spots");
    addEvents();

    // $('#places li').on('click', (e)=>{
    //     let $this = $(e.target);
    //     console.log($this.attr('id'));
    // });

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

    $.each(data.spots, (index, spot)=>{
        // $('<li>')
        //     .attr('id', `spotNo${index}`)
        //     .addClass('list-group-item')
        //     .addClass('list-group-item-action')
        //     .html(`${element.city}, <em>${element.country}</em>`)
        //     .appendTo(appendElement);
        appendElement.append(`
            <li id="spotsNo${index}Spot" class="list-group-item mb-1 spotCity>
                ${spot.city}
        
                <ul class="list-group spotDetails"
                    <li class="input-group w-100">
                    <span class="w-20 input-group-text">city</span>
                        <input id="spotNo${index}CityEdit" type="text" name="city" class="form-control editSpot" value="${spot.city}">
                    </li>
                
                    <li class="list-group w-100">
                        <span class="w-20 input-group-text">country</span>
                            <input id="spotNo${index}CountryEdit" type="text" name="country" class="form-control editSpot" value="${spot.country}">
                </li>
                </ul>
            </li>`);

            $('.spotDetails').hide();
            $('input.editSpot').prop('readonly', true);


    });
}

function addEvents(){
    $('spotCity').on('click', (e)=> {
        let $this = $(e.target);
        let $thisId = $this.attr('id');

        $('#'+ $thisId + '> ul.spotDetails').toggle();
        $('#'+ $thisId + '> i.editSpot').toggle();
    });

    $('#btnHideAll').on('click', (e)=> {
        $('ul.spotDeatils').hide();
    });
    $('#btnShowAll').on('click', (e)=> {

        $('ul.spotDetails').show();
    });

    $('input.editSpot').on('click', (e)=> {

        console.log(e.target); 
        let $this = $(e.target); 
        $this.prop('readonly', false); 
    
    });

    $('#btnSaveSpot').on('click', ()=>{

        data.spots.push({ 
          city : $('#spotAddCity').val(), 
          country : $('#spotAddCountry').val(),
        }); 
      
        loadSpots("spots");
        addEvents(); 
    
        $('#addSpotModal .btn-close').click() 
        $('#addSpotModal input').val(''); 
        
    
      });

      $('input.editSpot').on('blur', (e)=> {

        let $this = $(e.target); 
        let $thisId = $this.attr('id'); 
        let $thisKey = $this.attr('city');
         console.log($thisKey); 
     
        let regexDigit = /\d+/g;
        let spotIndex = $thisId.match(regexDigit)[0]; 
    
    
        data.spots[spotIndex][$thisKey] = $this.val(); 
    
        $(e.target).prop('readonly', true); 
         
      }); 
    
    
      $('#btnConsoleData').on('click', ()=>{
    
        console.log(data.spots); 
    
      })
}