const rezepte = [
  {
    name: "Brownie",
    zubereitung: "Lorem ipsum...",
    zeit: "30min",
    schwierigkeit: "mittel",
    anzahlPersonen: 4,
    vegan: true,
    zutaten: [
      {
        zutat: "Mehl",
        menge: "200g",
      },
      {
        zutat: "Zucker",
        menge: "100g",
      },
      {
        zutat: "Backkakao",
        menge: "100g",
      },
    ],
  },
  {
    name: "Burger",
    zubereitung: "jjj Lorem ipsumm ",
    zeit: "35 min",
    schwierigkeit: "einfach",
    anzahlPersonen: 2,
    vegan: true,
    zutaten: [
      {
        zutat: "Burger Brot",
        menge: "2",
      },
      {
        zutat: "Tomaten",
        menge: "2",
      },
      {
        zutat: "Vegan Käse",
        menge: "4 Stüke",
      },
    ],
  },
  {
    name: "Eis in Glas",
    zubereitung: "Ipsum",
    zeit: "10 min",
    schwierigkeit: "hardcore",
    anzahlPersonen: 10,
    vegan: true,
    zutaten: [
      {
        zutat: "Wassser",
        menge: "1 TL",
      },
      {
        zutat: "Milch",
        menge: "100 ml",
      },
    ],
  },
  {
    name: "Eis in Waffel",
    zubereitung: "Ipsum",
    zeit: "10 min",
    schwierigkeit: "hardcore",
    anzahlPersonen: 10,
    vegan: true,
    zutaten: [
      {
        zutat: "Wassser",
        menge: "3 TL",
      },
      {
        zutat: "Milch",
        menge: "150 ml",
      },
    ],
  },
  {
    name: "Ramen",
    zubereitung: "Ipsum",
    zeit: "10 min",
    schwierigkeit: "hardcore",
    anzahlPersonen: 10,
    vegan: true,
    zutaten: [
      {
        zutat: "Wassser",
        menge: "1 Liter",
      },
      {
        zutat: "Nudeln",
        menge: "500 g",
      },
    ],
  },

  {
    name: "Toast mit Beeren",
    zubereitung: "Ipsum",
    zeit: "15 min",
    schwierigkeit: "leicht",
    anzahlPersonen: 2,
    vegan: true,
    zutaten: [
      {
        zutat: "Toast",
        menge: "4 Scheiben",
      },
      {
        zutat: "Beeren",
        menge: "100 g",
      },
    ],
  },
  {
    name: "Torte",
    zubereitung: "Ipsum",
    zeit: "120 min",
    schwierigkeit: "super hardcore",
    anzahlPersonen: 10,
    vegan: true,
    zutaten: [
      {
        zutat: "Mehl",
        menge: "1 kg",
      },
      {
        zutat: "Sahne",
        menge: "500 ml",
      },
      {
        zutat: "Zucker",
        menge: "300 g",
      },
    ],
  },
];
console.table(rezepte);

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navMenu = document.getElementsByClassName("nav-Menu")[0];

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const shareAlert = document.querySelector("#recipe .details button");
shareAlert.addEventListener("click", () => {
  alert("Shared!");
});
