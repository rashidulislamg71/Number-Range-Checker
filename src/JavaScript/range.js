
document.getElementById('rangeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    const number = parseInt(numberInput, 10);

    // Range Chaker
    const isInRange = number >= 1 && number <= 100;

    if (isInRange) {
        resultElement.textContent = `The number ${number} is in the range of 10 to 20.`;
        resultElement.style.color = 'green';
       
    } else {
        resultElement.textContent = `The number ${number} is out of the range of 10 to 20.`;
        resultElement.style.color = 'red';
    }
    document.getElementById('numberInput').value = " ";
});


let x = 109;

while (x >= 10) {
    console.log(x);
    x = x - 1;
}