var containerEL = $('.container');
var saveBtn = $('.saveBtn');
var textArea = $('.text-area')
var msgDiv = $('.msg')
var inputs = [];

//Styling
$('.text-area').css({ 'width': '1000px', 'height': '75px' });
$('.time-area').css('border-bottom', '2px dotted');
$('.saveBtn').css('padding', '28px');

//Function to display message when local storage is saved
function displayMsg(message) {
    msgDiv.textContent = message;
}

function displayData() {
    for (i = 0; i < inputs.length; i++)
        var saveData = inputs;
        JSON.parse(localStorage.getItem(saveData))

}

//function for saving input to local storage upon save button click
saveBtn.on('click', function () {
    inputs = textArea.val();
    localStorage.setItem('text-area', inputs);

        console.log(JSON.stringify(textArea.val()));
        console.log(inputs);

        if (inputs === '') {
            displayMsg('Please add something to save on your calender!');
        } else 
            displayMsg('Saved to localstorage!');
            console.log(displayMsg());
    });
    displayData();


