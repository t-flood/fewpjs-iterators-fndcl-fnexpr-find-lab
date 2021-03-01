const superbowlWin = (array) => {
  const found = array.find(({ result }) => result === "W");
  if (found) return found.year;
};
