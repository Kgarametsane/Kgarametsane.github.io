function generateNumbers() {
    var numbers = [];
    while (numbers.length < 5) {
        var randomNum = Math.floor(Math.random()*36) + 1;
        if (! numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = numbers.join(', ')
}