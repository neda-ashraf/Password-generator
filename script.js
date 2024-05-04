const count = document.getElementById('count');
const charcount = document.getElementById('charcount');
const numbers = document.getElementById('numbers');
const letters = document.getElementById('letters');
const mixedcases = document.getElementById('mixedcases');
const punctuations = document.getElementById('punctuations');
const answer = document.getElementById('answer');
const copy = document.getElementById('copy');

count.textContent = charcount.value;

function generatePassword(length) {
    var result = '';
    var characters = '';

    if (numbers.checked) {
        characters += '0123456789';
    }
    if (letters.checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (mixedcases.checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    if (punctuations.checked) {
        characters += '!@#$%^&*()-_=+';
    }

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


function updatePassword() {
    answer.textContent = generatePassword(charcount.value);
}


numbers.addEventListener('click', updatePassword);
letters.addEventListener('click', updatePassword);
mixedcases.addEventListener('click', updatePassword);
punctuations.addEventListener('click', updatePassword);
charcount.addEventListener('click', () => {
    count.textContent = charcount.value;
    updatePassword();

})


copy.addEventListener('click', () => {
    var copyText = answer.textContent;
    navigator.clipboard.writeText(copyText)
        .then(function () {
            document.getElementById('cp').style.display = "flex";
            setTimeout(function () {
                document.getElementById('cp').style.display = "none";
            }, 2000);
        })
        .catch(function (error) {
            alert("Failed to copy text: " + error);
        });
})
