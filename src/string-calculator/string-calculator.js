function add(numbers) {
  if (numbers !== "") {
    const numberList = numbers.split(",");
    return numberList.reduce((result, item) => (result += Number(item)), 0);
  }
  return "";
}

module.exports = { add };
