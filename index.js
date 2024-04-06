function isPalindrome(word) {
  const charArray = word.split(""); //converts string to array of characters

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] !== charArray[charArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/*
  Add your pseudocode here:
  1.split word characters into an array
  2. Access array elements using for loop
  3. Check if equal from between first and last character iteratively till last and first character
  4. return false and exit from function if any mismatch found
  5. return true if the loop fully runs
*/

/*
  Add written explanation of your solution here:
  The function takes a string, splits that string into an array of its individual characters and then checks
  for mismatch between last and first characters iteratively from character to next respectively. Any mismatch
  results to a false return from function as it indicates the word is not a palindrome. The function returns
  true if all characters match as it skips the first block of if-statement entirely.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
