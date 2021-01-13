const items = [
    {
        type: "tshirt",
        gender: "male",
        size: "large",
        color: "blue",
        image: "img/blue_t.png",
    },
    {
        type: "pants",
        gender: "male",
        size: "large",
        color: "yellow",
        image: "img/yellow_p.png",
    },
    {
        type: "skirt",
        gender: "male",
        size: "large",
        color: "pink",
        image: "img/pink_s.png",
    },
    {
        type: "pants",
        gender: "male",
        size: "large",
        color: "pink",
        image: "img/pink_p.png",
    },
    {
        type: "tshirt",
        gender: "male",
        size: "large",
        color: "blue",
        image: "img/blue_t.png",
    },
    {
        type: "pants",
        gender: "male",
        size: "large",
        color: "blue",
        image: "img/blue_p.png",
    },
    {
        type: "tshirt",
        gender: "male",
        size: "large",
        color: "blue",
        image: "img/blue_t.png",
    },
];

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

displayItems(items);
setEventListner(items);
