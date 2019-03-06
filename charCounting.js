function countLetters (word) {
  var outputObj = {}
  var wordChars = word.split(" ").join("");
  for (var i = 0; i < wordChars.length; i++) {
    if (outputObj[wordChars[i]]) {
      outputObj[wordChars[i]] ++;
    } else {
      outputObj[wordChars[i]] = 1;
    }
  }
  return outputObj;
};
console.log(countLetters("lighthouse in the house"));