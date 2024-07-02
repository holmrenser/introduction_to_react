1 == "1.0"; // equality operator attempts to convert
// true

1 != "1.0";
// false

1 === "1.0"; // strict equality operator does not convert
// false

1 !== "1.0";
// true

1 + 1.0;
// 2

1 + "2.1";
// "12.1"

1 / "2.1";
// 0.47619047619047616
