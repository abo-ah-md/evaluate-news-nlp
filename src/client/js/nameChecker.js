function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    console.log("correct");
    return true;
  } else {
    return false;
  }
}

export { checkForName };
