export const stringToWords = (string: String) => {
  const words: string[] = string.split(" ");

  return words;
};

export const wordToCharacters = (word: String) => {
  let characters = [];

  for (let i = 0; i < word.length; i++) {
    characters.push(word[i]);
  }

  return characters;
};
