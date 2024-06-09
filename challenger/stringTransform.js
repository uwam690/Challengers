
function transformString() {
    const inputString = document.getElementById('inputString').value;
    const length = inputString.length;
    let result = "";

    if (length % 15 === 0) {
        // Reverse the string
        let reversedString = inputString.split('').reverse().join('');
        // Replace each character with its ASCII code
        result = reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the string
        result = inputString.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        result = inputString.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        //this is messages you may see when length doesn't divisible by 3 or 5.
        result = "The length of the string is not divisible by 3 or 5.";
    }

    document.getElementById('output').textContent = result;
}
