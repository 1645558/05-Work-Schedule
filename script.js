var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textAreaEL = $('.text-area');
var msgDivEL = $('.msg');

//Display time at the top of the page
var today = moment()
$('#currentDay').text(today.format('dddd MMMM Do YYYY'))

//Styling
$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

//saving input to local storage upon save button click
saveBtn.on('click', function () {
    var text = $(this).siblings('.text-area').val();
    var hour = $(this).parent().attr('id');


    localStorage.setItem(hour, text);
    console.log(hour);
});
 