var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var inputs = [];
var textInputs = 0;

$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

saveBtn.on('click', function () {
    $('.text-area').each(function () {
        inputs[textInputs++] = $('.text-area').val();
        console.log(inputs);
        localStorage.setItem('text-area', inputs)
    })
})

