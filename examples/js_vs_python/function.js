function selectSecondLetter(string) {
  return string.slice(1, 2);
}

const selectThirdLetter = (string) => string.slice(2, 3);

const greeting = "Hello!";
selectSecondLetter(greeting);
// "e"

selectThirdLetter(greeting);
// "l"
