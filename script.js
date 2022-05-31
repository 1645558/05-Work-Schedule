var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textAreaEL = $('.text-area');
var msgDivEL = $('.msg');


//Styling
$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

function displayData() {

}

//saving input to local storage upon save button click
saveBtn.on('click', function () {
    var text = $(this).siblings('.text-area').val();
    var hour = $(this).siblings('.text-area').text;

    localStorage.setItem(hour, text);
    console.log(hour);
});
 