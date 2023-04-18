export const quizJS = {
  quizTitle: "Podstawy JavaScript",
  quizSynopsis:
    "Zestaw pytań z zakresu podstaw JavaScriptu.",
  nrOfQuestions: "4",
  questions: [
    {
      question:
        "Jakie są podstawowe typy danych w JavaScript?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "String, Number, Boolean, NaN, Object, Symbol, Null",
        "String, Number, Boolean, Array, Object, Symbol, Null",
        "String, Number, Boolean, Null, Undefined, Symbol, Object",
        "String, Number, Boolean, NaN, Function, Symbol, Undefined",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "W języku JavaScript zdefiniowano następujących siedem typów wbudowanych: null, undefined, boolean, number, string, object, symbol (dodany do języka ECMAScript 6!).Wszystkie powyższe typy z wyjątkiem typu object są nazywane 'prymitywnymi'.",
      point: "20",
    },
    {
        question: "Zaznacz paradygmaty JavaScriptu",
        questionType: "text",
        answerSelectionType: "multiple",
        answers: [
          "Programowanie funkcyjne",
          "Programowanie obiektowe",
          "Testowanie - TDD i BDD",
          "Programowanie asynchroniczne",
        ],
        correctAnswer: [1, 2, 4],
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
        explanation:
          "Testowanie - to techniki i narzędzia, które pomagają w testowaniu i weryfikowaniu poprawności kodu, takie jak TDD lub BDD.",
        point: "20",
      },
    {
      question: "Jaką informację otrzymamy porównując następujące wartości: NaN === NaN ?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["true", "false", "undefined", "Error"],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "W specyfikacji ECMA-262, która definiuje język JavaScript, określono, że wartość NaN jest jedyną wartością w języku, która nie jest równa sobie samej. Oznacza to, że porównanie dwóch wartości NaN za pomocą operatora równości zwraca wartość false, ponieważ wewnętrznie w języku JavaScript wartość NaN jest traktowana jako unikalna i nieporównywalna z innymi wartościami. W ten sposób, porównanie false NaN === NaN stanowi próbę porównania dwóch unikalnych wartości, co daje fałszywy wynik.",
      point: "20",
    },
    {
      question: "Które zdanie jest nieprawdziwe?",
      questionType: "text",
      answerSelectionType: "single",
      answers: ["var: ma zasięg funkcyjny i nie można jej ponownie deklarować ", "var ma zasięg funkcyjny, a let i const blokowy", "zmienna var podlega hoistingowi", "słowa kluczowe określające zmienne 'let' i 'const' zostały dodane do JavaScriptu w wersji ES6"],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "var można ponownie deklarować w tym samym zakresie, co może prowadzić do nieoczekiwanych wyników. Jeśli zadeklarujemy zmienną za pomocą var po raz pierwszy, to zostanie utworzona nowa zmienna w danym zakresie i będzie ona widoczna od tego momentu. Jednak jeśli zadeklarujemy zmienną za pomocą var po raz kolejny w tym samym zakresie, to wartość zmiennej zostanie zastąpiona nową wartością, ale sama deklaracja nie zostanie zmieniona. UŻYWAJ LET I CONST!",
      point: "20",
    },
    {
      question: "Która metoda nie zwraca nowej tablicy?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "filter()",
        "map()",
        "forEach()",
        "reduce()",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Metoda Array.prototype.forEach() nie zwraca nowej tablicy. Metoda ta wywołuje funkcję dla każdego elementu tablicy i nie zmienia jej zawartości.",
      point: "20",
    },
    {
        question: "Wybierz stany Promise",
        questionType: "text",
        answerSelectionType: "multiple",
        answers: [
          "pending",
          "resolved",
          "freeze",
          "rejected",
        ],
        correctAnswer: [1,2,4],
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
        explanation:
          "Metoda Object.freeze() w JavaScript służy do zamrożenia obiektu, co oznacza, że ​jego wartości nie mogą być zmieniane ani dodawane ani usuwane. Po zamrożeniu obiekt staje się niemodyfikowalny, a każda próba modyfikacji skutkuje błędem.",
        point: "20",
      },
    {
      question: "Co to jest IIFE?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "to funkcja JavaScript, która jest wywoływana automatycznie w momencie, gdy zostaje zdefiniowana.",
        "jest to biblioteka służąca do wykonywania zapytań asynchronicznych",
        "jest to framework JS",
        "wszystkie powyższe odpowiedzi są nieprawidłowe",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Natychmiast wywoływana funkcja (ang. Immediately Invoked Function Expression, IIFE) to funkcja JavaScript, która jest wywoływana automatycznie w momencie, gdy zostaje zdefiniowana. Jest to popularny wzorzec projektowy w JavaScript, który pozwala na tworzenie izolowanego zakresu zmiennych i funkcji oraz zapobiega konfliktom nazw i zmiennej globalnej.",
      point: "20",
    },
  ],
};
