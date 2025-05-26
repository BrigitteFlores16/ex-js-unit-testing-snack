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

function findPostById(posts, id) {
  if (typeof id !== "number") {
    throw new Error("L'ID deve essere un numero");
  }
  return posts.find((post) => post.id === id) || null;
}

test("La funzione findPostById deve restituire il post corretto dato l’array di post e l’id", () => {
  const posts = [
    {
      id: 1,
      title: "Introduzione a Python",
      slug: "introduzione-a-Python",
    },
    { id: 2, title: "Ciao Mondo ", slug: "ciao-mondo" },
    {
      id: 3,
      title: "Introduzione a React",
      slug: "introduzione-a-react",
    },
  ];

  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: "Ciao Mondo ",
    slug: "ciao-mondo",
  });
  expect(findPostById(posts, 4)).toBeNull();
});

test("Ogni post deve avere le proprietà id, title e slug", () => {
  const posts = [
    {
      id: 1,
      title: "Introduzione a Bootstrap",
      slug: "introduzione-a-bootstrap",
    },
    { id: 2, title: "Ciao Mondo ", slug: "ciao-mondo" },
    {
      id: 3,
      title: "Introduzione a React",
      slug: "introduzione-a-react",
    },
  ];

  posts.forEach((post) => {
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("slug");
    expect(typeof post.id).toBe("number");
  });
});

//Bonus
//Challenge: describe() - organizzazione dei test
//Organizza i test in describe() raggruppandoli per argomento.

//Snack 8 (Bonus)
//Creare due test che verifichino le seguenti descrizioni:
// "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."
//"Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."
//Note:
//Si consiglia di resettare l'array di post dopo ogni test. Ti ricordi come si fa?

//Snack 9 (Bonus)
//Creare un test che verifichi la seguente descrizione:
//"Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."
// Nota:Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.

// Snack 10 (Bonus) :createSlug() – Incrementare lo slug se esiste già
// Creare un test che verifichi la seguente descrizione:
//"Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."
