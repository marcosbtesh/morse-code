import { MorseLetters } from "../types/morseConstants";
import { stringToWords, wordToCharacters } from "./Utils/strings";

interface TextToMorseProps {
  text: string;
}

export const textToMorse = ({ text }: TextToMorseProps) => {
  console.log(`Converting ${text} to morse`);

  const words = stringToWords(text);

  for (const word in words) {
    const characters = wordToCharacters(word)

    for (const character in characters) {

      const morse_equivalent = Object.keys(MorseLetters)[character]

    }
  }
};
