var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textAreaEL = $('.text-area');
var msgDivEL = $('.msg');

//Display time at the top of the page
var today = moment()
$('#currentDay').text(today.format('dddd MMMM Do YYYY'))

//Color coding to show time of day
function timeBlocks() {
    var hour = moment().hours();

    $('.time-block').each(function () {
        var currentHour = parseInt($(this).attr('id'));
        console.log(currentHour)

        //console.log(this)

        if (currentHour > hour) {
            $(this).addClass('future');
        } else if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

function displayData() {
    $('.hour').each(function() {
        var currentHour = $(this).parent().attr('id');   
        console.log(this)
        var currTextArea = JSON.parse(localStorage.getItem(currentHour));

        if (currTextArea !== null) {
            $(this).siblings('.text-area').val(currTextArea)
        }
        console.log(currTextArea)
    })
}

//Styling
// $('.text-area').css({ 'width': '1000px', 'height': '75px' });
// $('.time-area').css('border-bottom', '2px dotted');
// $('.saveBtn').css('padding', '28px');

//saving input to local storage upon save button click
saveBtn.on('click', function () {
    var text = $(this).siblings('.text-area').val();
    var hour = $(this).parent().attr('id');


    localStorage.setItem(hour, JSON.stringify(text));
    console.log(hour);
});

timeBlocks();
displayData();