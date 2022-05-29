var containerEL = $('.container');
var saveBtn = $('.saveBtn');

$('.text-area').css({'width': '1000px', 'height': '75px'});
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

saveBtn.on('click', function() {
    var input = $('.text-area').val();
    console.log(input);
    localStorage.setItem('text-area', input);
})

