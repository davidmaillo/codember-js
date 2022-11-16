// Código cifrado del problema
const input =
  "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"

// Cada espacio es una palabra distinta. Separo cada código recortando los espacios:
const words = input.split(" ")

// Solución: aplico mi función ASCIItoString a cada palabra y concateno el texto.
const solution = words
  .map((word) => {
    return ASCIItoString(word)
  })
  .join(" ")
console.log("submit " + solution)

/* Cada código es un conjunto de caracteres ASCII.
Dado que en el abecedario de minúsculas en ASCII los caracteres pueden ser un número entre 97 y 122.
Ver imagen: https://cdn-images-1.medium.com/max/2000/1*CE8uSnYm4T-bhEFbUiGYVQ.png
*/
function ASCIItoString(word) {
  let pointer = 0
  let wordChars = []

  // Recorto cada 3 chars si empiezan por 1, y cada 2 si empiezan por 9. Guardo cada letra en un array.
  for (let i = 0; i <= word.length; i++) {
    if (i == pointer) {
      if (word[pointer] == "1") {
        wordChars.push(word.slice(pointer, pointer + 3))
        pointer = pointer + 3
      }
      if (word[pointer] == "9") {
        wordChars.push(word.slice(pointer, pointer + 2))
        pointer = pointer + 2
      }
    }
  }

  // Uso la función nativa de JS fromCharCode() para traducir un caracter ASCII a String. Ej. 116 -> t
  let translationString = wordChars.map((char) => {
    return String.fromCharCode(char)
  })

  // Concateno las letras y devuelvo la cadena con la palabra final: ["t", "h", "a", "n", "k", "s"] => "thanks"
  return translationString.join("")
}
