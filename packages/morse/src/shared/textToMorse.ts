import { stringToWords } from "./Utils/stringToWords";

interface TextToMorseProps {
  text: string;
}

export const textToMorse = ({ text }: TextToMorseProps) => {
  console.log(`Converting ${text} to morse`);

  const words = stringToWords(text);
};
