var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textArea = $('.text-area')
var msgDiv = $('.msg')
var input = {
    text: textArea.val()
};

//Styling
$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

//Function to display message when local storage is saved
function displayMsg(message) {
    msgDiv.textContent = message;
}

function displayData() {
    input = textArea.val();

        var saveData = JSON.parse(localStorage.getItem('inputs')) || [];
        saveData.push(input);
}

//function for saving input to local storage upon save button click
saveBtn.on('click', function (event) {
    event.preventDefault();
    input = textArea.val();

    localStorage.setItem('text-area', JSON.stringify(input));

    displayData();

    console.log(JSON.stringify(input));
    console.log(input);

    if (input === '') {
        displayMsg('Please add something to save on your calender!');
    } else
        displayMsg('Saved to localstorage!');
    console.log(displayMsg());
});


