import { MorseLetters } from "../types/morseConstants.js";
import { stringToWords, wordToCharacters } from "./Utils/strings.js";

interface TextToMorseProps {
  text: string;
}

export const textToMorse = ({ text }: TextToMorseProps) => {
  console.log(`Converting ${text} to morse`);

  const words = stringToWords(text);

  for (const word of words) {
    const characters = wordToCharacters(word);

    for (const character of characters) {
      const morse_equivalent = Object.keys(MorseLetters)[character];
    }
  }
};
