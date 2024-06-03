export default class Card {
  constructor(id, name, age, surname, email, imgUrl, templateSelector) {
    this._id = id;
    this._name = name;
    this._age = age;
    this._surname = surname;
    this._email = email;
    this._imgUrl = imgUrl;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const directorTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return directorTemplate;
  }

  createCard() {
    console.log(this._imgUrl);
    this._element = this._getTemplate();
    this._element.querySelector(".element__image").alt = this._surname;
    this._element.querySelector(".element__image").src = this._imgUrl;

    this._element.querySelector(".element__name").textContent =
      this._name + " " + this._surname;
    this._element.querySelector(".element__age").textContent = this._age;
    this._elementImage = this._element.querySelector(".element__image");
    this._elementChangeImageBtn = this._element.querySelector(
      ".element__change-image"
    );
    this._setListenersForButtons();

    return this._element;
  }

  _setListenersForButtons() {
    this._elementChangeImageBtn.addEventListener("click", () =>
      this._handleChangeImage()
    );
  }

  _handleChangeImage() {
    const newImageUrl = prompt("Enter new image URL:");
    if (newImageUrl) {
      this._element.querySelector(".element__image").src = newImageUrl;
      this._imgUrl = newImageUrl;
    }
  }
}
