import { stringToWords } from "../shared/Utils/strings.js";
import {
  MorseContants,
  MorseLetters,
  MorseNumbers,
} from "../types/morseConstants.js";
import { charactersRegex, numbersRegex } from "../types/regex.js";

const letters = MorseLetters as Record<string, Array<String> | undefined>;
const numbers = MorseNumbers as Record<string, Array<String> | undefined>;

const characterGap: Array<String> = generateSilence(MorseContants.LENGTH_SPACE);

export const textToMorse = ({ text }: { text: String }): Array<String> => {
  const words = stringToWords(text.toLowerCase());

  return words
    .map(encodeWord)
    .filter((wordMorse) => wordMorse.length > 0)
    .reduce(joinWithGap, [] as Array<String>);
};

const encodeWord = (word: string): Array<String> =>
  [...word]
    .map((character) => handleCharacter({ character }))
    .filter((characterMorse) => characterMorse.length > 0)
    .reduce(joinWithGap, [] as Array<String>);

const handleCharacter = ({
  character,
}: {
  character: string;
}): Array<String> => {
  if (charactersRegex.test(character)) {
    return letters[character] ?? [];
  }

  if (numbersRegex.test(character)) {
    return numbers[character] ?? [];
  }

  return [];
};

const joinWithGap = (
  accumulated: Array<String>,
  segment: Array<String>,
): Array<String> =>
  accumulated.length === 0
    ? segment
    : [...accumulated, ...characterGap, ...segment];

function generateSilence(length: number): Array<String> {
  return Array.from({ length }, () => MorseContants.SILENT_CHARACTER);
}
