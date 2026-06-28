export const stringToWords = (string: string) => {
  const words: string[] = string.split(" ");

  return words;
};

export const wordToCharacters = (word: string) => {
  let characters = [];

  for (let i = 0; i < word.length; i++) {

    characters.push(word[i])
  }

  return characters
}
