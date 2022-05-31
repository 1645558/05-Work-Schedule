var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textArea = $('.text-area');
var msgDiv = $('.msg');
var checkLocalStorage = localStorage.getItem('text-area');
if (checkLocalStorage) {
    const arr = JSON.parse(checkLocalStorage)
    console.log(arr)
}

//Styling
$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

//Function to display message when local storage is saved
function displayMsg(message) {
    msgDiv.textContent = message;
}

function displayData() {
    
}

//function for saving input to local storage upon save button click
saveBtn.on('click', function (event) {
    event.preventDefault();
    input = textArea.val();

    var input = []
    
    for (let i = 9; i != 18; i++) {
        const test = $('#' + i).val()
        input.push(test)
    }

    localStorage.setItem('text-area', JSON.stringify(input));

});


