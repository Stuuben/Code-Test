const sortedString = (input: string) => {
  return input.replace(/\s/g, "").toLowerCase().split("").sort().join("");
};

export const checkAnagram = (userInput1: string, userInput2: string) => {
  const length1 = userInput1.length;
  const length2 = userInput2.length;
  if (length1 !== length2) {
    return false;
  }
  const string1 = sortedString(userInput1);

  const string2 = sortedString(userInput2);

  return string1 === string2;
};
