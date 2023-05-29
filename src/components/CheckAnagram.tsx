export const checkAnagram = (userInput1: string, userInput2: string) => {
  const length1 = userInput1.length;
  const length2 = userInput2.length;
  if (length1 !== length2) {
    return false;
  }
  const string1 = userInput1
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  const string2 = userInput2
    .replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return string1 === string2;
};

// gör till function dry!
