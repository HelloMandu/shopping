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
