<h1 align="center">Vanilla JS로 쇼핑리스트 필터</h1>

## Features
- es6
- filter

## Explain
 - 쇼핑리스트
 <p align="center">
   <img src="https://user-images.githubusercontent.com/45222982/104422992-d32dad80-55c0-11eb-8cc7-40a99db1f2f0.png" width="800" height="600"/>
</p>

### Source

- 종류별로 filter
```js
const loadItems = () => {
    return fetch("data/data.json")
        .then((response) => response.json())
        .then((json) => json.items);
};

const displayItems = (items) => {
    const container = document.querySelector(".items");
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
};

const createHTMLString = (item) => {
    return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item_description">${item.gender}, ${item.size}</span>
  </li>`;
};

const onButtonClick = (e, items) => {
    const dataset = e.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if (key && value) {
        const filtered = items.filter((item) => item[key] === value);
        displayItems(filtered);
    }
};

const setEventListner = (items) => {
    const logo = document.querySelector(".logo");
    const buttons = document.querySelector(".buttons");
    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", (e) => onButtonClick(e, items));
};

loadItems().then((items) => {
    displayItems(items);
    setEventListner(items);
});
```