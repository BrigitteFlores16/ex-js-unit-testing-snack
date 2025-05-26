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

//snack 2
//Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug restituisce una stringa in lowercase."
function createSlug(text) {
  return text.toLowerCase();
}

test("La funzione createSlug deve restituire una stringa in lowercase", () => {
  expect(createSlug("Hello World")).toBe("hello world");
  expect(createSlug("Ciao123")).toBe("ciao123");
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

// snack 5
// Creare un test che verifichi la seguente descrizione:
//"La funzione isPalindrome verifica se una stringa è un palindromo."
//Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

// snack 6
// Creare un test che verifichi la seguente descrizione:
// "La funzione isAnagram verifica se due stringhe sono anagrammi l'una dell'altra."

// snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
//Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
