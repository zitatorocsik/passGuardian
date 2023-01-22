console.log("connected");
function showPassword() {
    document.getElementById("user-input").type = "text";
  }
  
function hidePassword() {
    document.getElementById("user-input").type = "password";
  }



// function estimateCrackTime(password) {
//     var password = document.getElementById("user-input").value;

//     // Define the number of guesses per second
//     var guessesPerSecond = 100000000000; // 100 million
//     var possibleCombinations = 1;
//     var lowerCase = /[a-z]/;
//     var upperCase = /[A-Z]/;
//     var numbers = /[0-9]/;
//     var symbols = /[!@#\$%\^&\*\(\)\_\-+=\.,\/:;\{\}\[\]]/;
//     var keyboard = /qwerty|asdfgh|zxcvbn|1234|qazwsx|qwert|asdf|zxcv|12|qaz|qwe|asd|zxc|qw|as|zx/;
//     var complexity = 1;

//     // check for complexity
//     if(password.match(keyboard)){
//         complexity = 0.1;
//     } else if(password.match(lowerCase) && password.match(upperCase) && password.match(numbers) && password.match(symbols)){
//         complexity = 5;
//     } else if((password.match(lowerCase) || password.match(upperCase)) && password.match(numbers) && password.match(symbols)){
//         complexity = 4;
//     } else if((password.match(lowerCase) || password.match(upperCase)) && password.match(numbers)){
//         complexity = 3;
//     } else if((password.match(lowerCase) || password.match(upperCase)) && password.match(symbols)){
//         complexity = 3;
//     } else if(password.match(lowerCase) || password.match(upperCase) || password.match(numbers) || password.match(symbols)){
//         complexity = 2;
//     }
//     for (var i = 0; i < password.length; i++) {
//         possibleCombinations *= 94;
//     }
//     var estimatedTime = possibleCombinations / guessesPerSecond * complexity;
//     // Convert estimated time to days, hours, minutes, and seconds
//     var days = Math.floor(estimatedTime / (60 * 60 * 24));
//     var hours = Math.floor(estimatedTime / (60 * 60)) % 24;
//     var minutes = Math.floor(estimatedTime / 60) % 60;
//     var seconds = Math.floor(estimatedTime) % 60;
//     // Return the estimated time in the format "X days X hours X minutes X seconds"
//     // Return the estimated time in the format "X days X hours X minutes X seconds"
//     document.getElementById("output").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
// }

function estimateCrackTime(password) {
    var password = document.getElementById("user-input").value;

    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    var numbers = /[0-9]/;
    var symbols = /[!@#\$%\^&\*\(\)\_\-+=\.,\/:;\{\}\[\]]/;
    var keyboard = /qwerty|asdfgh|zxcvbn|1234|qazwsx|qwert|asdf|zxcv|12|qaz|qwe|asd|zxc|qw|as|zx/;
    var security = 0;

    // check for complexity
    if(password.length >= 8){
        security += 1;
    }  else if (password.length < 8) {
        security -= 1;
    }
    if(password.match(lowerCase)){
        security += 1;
    }
    if(password.match(upperCase)){
        security += 1;
    }
    if(password.match(numbers)){
        security += 1;
    }
    if(password.match(symbols)){
        security += 1;
    }
    if(!password.match(keyboard)){
        security += 1;
    } else {
        security -= 1;
    }
    if(security >= 6){
        document.getElementById("output").innerHTML = "Very secure";
    } else if(security >= 4) {
        document.getElementById("output").innerHTML = "Secure";
    } else if(security >= 2) {
        document.getElementById("output").innerHTML = "Moderately secure";
    } else {
        document.getElementById("output").innerHTML = "Insecure";
    }
}

