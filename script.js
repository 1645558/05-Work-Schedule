var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textArea = $('.text-area');
var msgDiv = $('.msg');


//Styling
$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

//saving input to local storage upon save button click
saveBtn.on('click', function () {
    var text = containerEL.find('.text-area').val();
    var hour = $('textarea').closest().attr('id');

    localStorage.setItem(hour, text);
    console.log(hour);
});
 