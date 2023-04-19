export const quizCSS = {
  appLocale: {
    question: "Pytanie",
    landingHeaderText: "5 Pytań",
    startQuizBtn: "Start Quiz",
    resultFilterAll: "Wszystkie",
    resultFilterCorrect: "Poprawne",
    resultFilterIncorrect: "Błędne",
    prevQuestionBtn: "Prev",
    nextQuestionBtn: "Next",
    resultPageHeaderText:
      "Koniec quiz'u. Odpowiedziałeś na <correctIndexLength> z <questionLength> pytań.",
    resultPagePoint: "Zdobyłeś <correctPoints> z <totalPoints>.",
    singleSelectionTagText: "Jeden wybór",
    multipleSelectionTagText: "Wielokrotny wybór",
    pickNumberOfSelection: "Wybierz <numberOfSelection>",
  },
  quizTitle: "Podstawy CSS",
  quizSynopsis: "Zestaw pytań z zakresu podstaw CSS.",
  nrOfQuestions: "5",
  questions: [
    {
      question: "Co to jest CSS?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "Hybrydowy język programowania",
        "Jest to kompilowany język programowania",
        "Arkusz stylów, opisuje sposób wyświetlania dokumentu HTML. Służy do odseparowania układu graficznego od kodu opisującego strukturę elementów na stronie internetowej",
        "Jest to kaskadowy język programowania do tworzenia zdarzeń i obsługi stron www.",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "CSS (Cascading Style Sheets) to język stylów używany do opisu wyglądu i formatowania dokumentów HTML, XML i innych struktur dokumentów. CSS umożliwia oddzielenie struktury dokumentu od jego prezentacji graficznej, dzięki czemu można łatwo zmieniać wygląd strony bez zmiany samej struktury dokumentu.",
      point: "20",
    },
    {
      question: "Wybierz elementy modelu pudełkowego?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: ["padding", "margin", "box", "content"],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Każdy element w dokumencie HTML zajmuje określony obszar. Obszar ten nazywany jest pudełkiem i składają się na niego: zawartość (content),'marginesy' wewnętrzne (padding), obramowanie (border), marginesy (margin). Domyślnie wielkość pudełka ustawiona jest na zawartość (content-box), co oznacza, że jeśli ustawisz szerokość lub wysokość elementu np. na 200px i dodasz do niego paddingi, obramowanie lub marginesy, to wielkość pudełka zwiększy się o te dane.",
      point: "20",
    },
    {
      question: "Co to jest rem ?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "jest to jednostka wielkości elementu, która odnosi się do wielkości zdefiniowanej w rodzicu elementu",
        "jest to jednostka wielkości elementu, która odnosi się do wielkości zdefiniowanej w root'cie",
        "jest to wielkość elementu w odniesieniu do wysokości i szerokości okna przeglądarki",
        " jednostka długości, która odnosi się do jednostek fizycznych, takich jak centymetry, milimetry, cale, punkty itp. Jednakże ich wartość może się różnić w zależności od ustawień ekranu i drukarki, dlatego rzadziej są stosowane w projektowaniu stron internetowych.",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "jednostka długości, która jest podobna do jednostki em, ale zamiast wielokrotności rozmiaru czcionki elementu nadrzędnego, odnosi się do rozmiaru czcionki root element, czyli <html>. Dlatego wartość 'font-size: 1.5rem' oznacza, że rozmiar czcionki jest równy 1,5 razy rozmiarowi czcionki elementu root.",
      point: "20",
    },
    {
      question: "Zaznacz konwencje nazewnictwa w CSS?",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: [
        "BEM (Block Element Modifier)",
        "BES (Box Element Styling)",
        "OOCSS (Object-Oriented CSS)",
        "SMACSS (Scalable and Modular Architecture for CSS) ",
      ],
      correctAnswer: [1, 3, 4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "BEM (Block Element Modifier) - konwencja polegająca na opisaniu struktury strony za pomocą bloków, elementów i modyfikatorów. Nazwy bloków zapisuje się w postaci nazwy bloku, np. 'menu', elementy dodaje się po znaku podkreślenia, np. 'menu_item', a modyfikatory po znaku dwukropka, np. 'menu_item:hover'. Dzięki temu łatwiej jest określić, do czego dany styl odnosi się i jakie ma zastosowanie. OOCSS (Object-Oriented CSS) - konwencja polegająca na oddzieleniu struktury od stylowania, czyli na tworzeniu stylów dla konkretnych obiektów, a nie dla konkretnych elementów HTML. Dzięki temu stylowanie jest bardziej elastyczne i łatwiejsze do utrzymania. SMACSS (Scalable and Modular Architecture for CSS) - konwencja polegająca na podziale stylów na pięć kategorii: base, layout, module, state, theme. Każda kategoria odpowiada za inny aspekt stylowania i pozwala na bardziej elastyczne i skalowalne projektowanie.",
      point: "20",
    },
    {
      question: "Która metoda nie wycentruje diva (w poziomie i pionie)?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "position absolute wraz z transform oraz top i left",
        "flex wraz z align-item i justify-content",
        "margin: 0 auto",
        "grid wraz z place-items",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "W CSS, ustawienie margin: 0 auto dla elementu blokowego powoduje, że element ten jest wyśrodkowany poziomo w swoim rodzicu. Wartość 0 oznacza brak marginesu na górze i na dole elementu, a wartość auto oznacza automatyczne wyliczenie marginesu poziomego, tak aby element został wyśrodkowany w poziomie względem swojego rodzica. Warto zaznaczyć, że aby margin: 0 auto zadziałało, element, którego dotyczy ta właściwość, musi mieć ustawione swoje wymiary (width i/lub height), ponieważ w przeciwnym razie nie będzie miał określonej szerokości, którą można by wykorzystać do wyliczenia marginesu poziomego.",
      point: "20",
    },
    {
      question: "Wybierz selektory CSS",
      questionType: "text",
      answerSelectionType: "multiple",
      answers: ["p", ".example", ":hover", "#main_content"],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "Selektory CSS umożliwiają wybieranie elementów HTML na stronie i stosowanie do nich stylów. W CSS, selektory pozwalają na targetowanie elementów na podstawie ich atrybutów, tagów HTML, klas, identyfikatorów i relacji z innymi elementami. ':hover' nie jest selektorem, lecz pseudo-klasą.",
      point: "20",
    },
    {
      question: "Co to jest ':before'?",
      questionType: "text",
      answerSelectionType: "single",
      answers: [
        "to błędny zapis pseudo-elementu",
        "to poprawny zapis pseudo-klasy",
        "jest to selektor",
        "wszystkie powyższe odpowiedzi są nieprawidłowe",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      explanation:
        "::before to pseudo-element w CSS, który umożliwia dodanie nowego elementu do struktury DOM przed określonym elementem. Można go wykorzystać do wstawiania treści przed elementem. Pamiętaj, że pseudo-elementy posiadają '::' a pseudo-klasy ':'",
      point: "20",
    },
  ],
};
