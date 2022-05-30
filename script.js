var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textArea = $('.text-area')
var msgDiv = $('.msg')
var inputs = [];
var textInputs = 0;

$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

function displayMsg(message) {
    msgDiv.textContent = message;
}

saveBtn.on('click', function (event) {
    event.preventDefault()
    inputs = textArea.val();

        localStorage.setItem('inputs', inputs);
        textArea.textContent = localStorage.getItem('text-area')
        console.log(inputs);
        console.log(JSON.stringify(textArea.val()));
        if (textArea === '') {
            displayMsg('Please add something to save on your calender!')
        } else 
            displayMsg('Saved to localstorage!')
            console.log(displayMsg())
    });


