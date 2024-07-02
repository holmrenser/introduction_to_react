// https://en.wikipedia.org/wiki/Fizz_buzz
for (let i = 0; i < 20; i += 1) {
  const divBy3 = i % 3 === 0;
  const divBy5 = i % 5 === 0;
  if (divBy3 && divBy5) {
    console.log("Fizz Buzz");
  } else if (divBy3) {
    console.log("Fizz");
  } else if (divBy5) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
