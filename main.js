function showPassword() {
    document.getElementById("user-input").type = "text";
  }
  
  function hidePassword() {
    document.getElementById("user-input").type = "password";
  }

  function estimateCrackTime() {
    var password = document.getElementById("user-input").value;
    // Define the number of possible characters
    var possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=,.?/:;{}[]";
    // Define the number of guesses per second
    var guessesPerSecond = 100000000; // 100 million
    // Calculate the number of possible combinations
    var possibleCombinations = Math.pow(possibleChars.length, password.length);
    // Calculate the estimated time to crack the password
    var estimatedTime = possibleCombinations / guessesPerSecond;
    // Convert estimated time to days, hours, minutes, and seconds
    var days = Math.floor(estimatedTime / (60 * 60 * 24));
    var hours = Math.floor(estimatedTime / (60 * 60)) % 24;
    var minutes = Math.floor(estimatedTime / 60) % 60;
    var seconds = Math.floor(estimatedTime) % 60;
    // Return the estimated time in the format "X days X hours X minutes X seconds"
    document.getElementById("output").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
}
