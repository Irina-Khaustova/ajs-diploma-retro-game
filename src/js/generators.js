/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes) {
  // TODO: write logic here
  const i = Math.floor(Math.random() * allowedTypes.length);
  console.log(i);
  yield new allowedTypes[i]();
  console.log(new allowedTypes[0]());
}

export function generateTeam(allowedTypes, characterCount) {
  // TODO: write logic here
  const team = [];
  for (let i = 1; i < characterCount + 1; i += 1) {
    team.push(characterGenerator(allowedTypes).next().value);
  }
  console.log(team);
  return team;
}
// console.log(characterGenerator(Character, 1).next())
