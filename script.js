import Card from "./components/Card.js";

const elements = document.querySelector(".elements");
const ageFilterCheckbox = document.getElementById("ageFilter");
const sortOptions = document.getElementById("sortOptions");

const initialCards = [
  {
    id: 1,
    name: "artem",
    age: 12,
    surname: "usanov",
    email: "sdfsd@fdg.com",
    imgUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    id: 2,
    name: "pvan",
    age: 22,
    surname: "ivanov",
    email: "ivanov@fdg.com",
    imgUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    id: 3,
    name: "alex",
    age: 23,
    surname: "smirnov",
    email: "alex@fdg.com",
    imgUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    id: 4,
    name: "alex",
    age: 33,
    surname: "smirnov",
    email: "alex@fdg.com",
    imgUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    id: 5,
    name: "alex",
    age: 40,
    surname: "smirnov",
    email: "alex@fdg.com",
    imgUrl:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
];

function createCardLayout(
  id,
  name,
  age,
  surname,
  email,
  imgUrl,
  templateSelector
) {
  const card = new Card(
    id,
    name,
    age,
    surname,
    email,
    imgUrl,
    templateSelector
  );
  const newCard = card.createCard();
  return newCard;
}

function displayCards(cards) {
  elements.innerHTML = "";
  cards.forEach((element) => {
    const cardElement = createCardLayout(
      element.id,
      element.name,
      element.age,
      element.surname,
      element.email,
      element.imgUrl,
      ".element-template"
    );
    elements.prepend(cardElement);
  });
}

function filterByAge(cards) {
  return cards.filter((card) => card.age > 18);
}

function sortCards(cards, criterion) {
  return cards.slice().sort((a, b) => {
    if (criterion === "name") {
      return b.name.localeCompare(a.name);
    } else if (criterion === "age") {
      return a.age - b.age;
    }
  });
}

ageFilterCheckbox.addEventListener("change", () => {
  let filteredCards = [...initialCards];
  if (ageFilterCheckbox.checked) {
    filteredCards = filterByAge(filteredCards);
  }
  displayCards(filteredCards);
});

sortOptions.addEventListener("change", () => {
  let filteredCards = [...initialCards];
  if (ageFilterCheckbox.checked) {
    filteredCards = filterByAge(filteredCards);
  }
  const sortedCards = sortCards(filteredCards, sortOptions.value);
  displayCards(sortedCards);
});

displayCards(initialCards);
