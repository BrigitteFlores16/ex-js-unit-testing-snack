const { createSlug } = require("./test-snack.js");

//snack 1
//Creare un test che verifichi la seguente descrizione:
//"La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(name) {
  return (
    name.charAt(0).toUpperCase() +
    name.charAt(name.indexOf(" ") + 1).toUpperCase()
  );
}

test("getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Carlo Rossi")).toBe("CR");
  expect(getInitials("Victor Bianchi")).toBe("VB");
});

//sanck 2
//Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug deve restituire una stringa in lowercase", () => {
  expect(createSlug("Hello World")).toBe("hello-world");
  expect(createSlug("Hello123")).toBe("hello123");
});

// snack 3
// Creare un test che verifichi la seguente descrizione:
// "La funzione average calcola la media aritmetica di un array di numeri."

function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return NaN;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

test("La funzione average deve calcolare correttamente la media aritmetica", () => {
  expect(average([2, 4, 6, 8])).toBe(5);
  expect(average([-2, -4, -6, -8])).toBe(-5);
  expect(average([])).toBeNaN();
});

// snack 4
// Creare un test che verifichi la seguente descrizione:
//"La funzione createSlug sostituisce gli spazi con -."
//Esempi:createSlug("Questo è un test") → "questo-e-un-test"

test("createSlug sostituisce gli spazi con -", () => {
  expect(createSlug("Ciao Mondo")).toBe("ciao-mondo");
  expect(createSlug("Test con spazi")).toBe("test-con-spazi");
});

// snack 5
// Creare un test che verifichi la seguente descrizione:
//"La funzione isPalindrome verifica se una stringa è un palindromo."
//Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

test("La funzione isPalindrome deve verificare se una stringa è un palindromo", () => {
  expect(isPalindrome("Carla")).toBe(false);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("12321")).toBe(true);
  expect(isPalindrome("12345")).toBe(false);
});

// snack 6
// Creare un test che verifichi la seguente descrizione:
// "La funzione isAnagram verifica se due stringhe sono anagrammi l'una dell'altra."
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
}

test("La funzione isAnagram deve verificare se due stringhe sono anagrammi", () => {
  expect(isAnagram("hello", "world")).toBe(false);
  expect(isAnagram("12345", "54321")).toBe(true);
});

// snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
//Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
