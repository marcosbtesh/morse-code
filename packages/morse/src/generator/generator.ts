import { stringToWords } from "../shared/Utils/strings.js"
import { MorseContants, MorseLetters, MorseNumbers } from "../types/morseConstants.js"
import { charactersRegex, numbersRegex } from "../types/regex.js"

export const textToMorse = ({ text }: { text: String }): Array<String> => {


  const words = stringToWords(text)
  let morseEquivalent;

  for (const word of words) {

    for (const character of word) {

      const characterInMorse = handleCharacter({ character })
      morseEquivalent = generateMorse({ morseEquivalent: characterInMorse })

    }

  }

  return morseEquivalent

}

const handleCharacter = ({ character }: { character: string }): Array<string> => {

  let morseEquivalent;

  if (charactersRegex.test(character)) {

    morseEquivalent = MorseLetters[character]


  } else if (numbersRegex.test(character)) {
    morseEquivalent = MorseNumbers[character]
  }

  return morseEquivalent


}


const generateMorse = ({ morseEquivalent }: { morseEquivalent: Array<String> }) => {


  if (morseEquivalent == null) {
    morseEquivalent = morseEquivalent
  } else {
    // morseEquivalent = `${generateMorseSpaces()} ${MorseContants.LENGTH_SPACE}`
    morseEquivalent.concat(generateMorseSpaces())
    morseEquivalent.concat(" ")

  }

  return morseEquivalent

}

const generateMorseSpaces = (): Array<String> => {

  let morseSpacesEquivalent: Array<String> = []


  for (let i = 0; i < MorseContants.LENGTH_SPACE; i++) {
    morseSpacesEquivalent.concat(MorseContants.SILENT_CHARACTER)
  }

  return morseSpacesEquivalent

}
