const housesArr = [
    {
        cardName: "Скиф",
        square: "59 м",
        dimensions: "8х10",
        deadlines: "15 дней",
        rooms: "3",
        type: "Одноэтажный",
        price: "1 850 000",
    },
    {
        cardName: "Сурож",
        square: "70 м",
        dimensions: "7х12",
        deadlines: "18 дней",
        rooms: "4",
        type: "С мансардой",
        price: "1 532 000",
    },
    {
        cardName: "Московит",
        square: "80 м",
        dimensions: "7х14",
        deadlines: "20 дней",
        rooms: "5",
        type: "Двухэтажный",
        price: "1 645 000",
    },
    {
        cardName: "Станица",
        square: "85 м",
        dimensions: "9х10",
        deadlines: "21 дней",
        rooms: "4",
        type: "С цокольным этажом",
        price: "1 300 000",
    },
    {
        cardName: "Слобода",
        square: "90 м",
        dimensions: "7х15",
        deadlines: "25 дней",
        rooms: "3",
        type: "Трехэтажный",
        price: "1 900 000",
    },
    {
        cardName: "Пицунда",
        square: "100 м",
        dimensions: "8х14",
        deadlines: "30 дней",
        rooms: "5",
        type: "С панорамными окнами",
        price: "1 890 000",
    },
    {
        cardName: "Хуторок",
        square: "95 м",
        dimensions: "9х9",
        deadlines: "28 дней",
        rooms: "2",
        type: "С гаражом",
        price: "1 980 000",
    },
];

const container = document.querySelector(".block4");

createAllCards();
function createAllCards () {
    tabs = document.createElement("div");
    tabs.className = "houses__cards";
    container.appendChild(tabs);
    for (let i = 0; i < housesArr.length; i++) {
        let temp = createCard(housesArr[i]);
        tabs.appendChild(temp);
    }
}

function createCard(cardData) {
    const article = document.createElement("article");
    article.className = "card";
    const img = document.createElement("img");
    img.className = "card__image";
    img.src = 'images/Rectangle1.png';
    img.alt = 'background card';
    const h2 = document.createElement("h2");
    h2.className = "card__name";
    h2.innerText = cardData.cardName;

    const divTxt = document.createElement("div");
    divTxt.className = "card__text-1";

    // up left
    const left1 = document.createElement("div");
    left1.className = "card__text-1_left-1";
    divTxt.appendChild(left1);

    let square = cardData.square.split(". ");
    square = square.map(t => `<p>Площадь: <span>${t}</span></p>`)
    let dimensions = cardData.dimensions.split(". ");
    dimensions = dimensions.map(t => `<p>Размеры: <span>${t}</span></p>`)
    left1.innerHTML = square.join("") + dimensions.join("");

    // up right
    const right1 = document.createElement("div");
    right1.className = "card__text-1_right-1";
    divTxt.appendChild(right1);

    let deadlines = cardData.deadlines.split(". ");
    deadlines = deadlines.map(t => `<p>Срок стройки: <span>${t}</span></p>`)
    let rooms = cardData.rooms.split(". ");
    rooms = rooms.map(t => `<p>Комнат: <span>${t}</span></p>`)
    right1.innerHTML = deadlines.join("") + rooms.join("");

    const divTxt2 = document.createElement("div");
    divTxt2.className = "card__text-2";

    // down left
    const left2 = document.createElement("div");
    left2.className = "card__text-2_left-2";
    left2.innerHTML = `<p><img src="./images/ellipse.svg" alt="ellipse">&nbsp;&nbsp;&nbsp;Тип дома:</p>` + `<p><img src="./images/ellipse.svg" alt="ellipse">&nbsp;&nbsp;&nbsp;Стоимость:</p>`;
    divTxt2.appendChild(left2);

    // down right
    const right2 = document.createElement("div");
    right2.className = "card__text-2_right-2";

    let type = cardData.type.split(". ");
    type = type.map(t => `<p id="karkas"><span>${t}</span></p>`)
    right2.innerHTML = type.join("");
    divTxt2.appendChild(right2);

    const inline = document.createElement("div");
    inline.className = "inline";

    let price = cardData.price.split(". ");
    price = price.map(t => `<p><span>от</span></p><p id="price">${t}</p><p><span>руб</span></p>`)
    inline.innerHTML = price.join("");
    right2.appendChild(inline);
    // double down
    const btn = document.createElement("button");
    btn.innerText = `смотреть проекты ❯`;
    const div = document.createElement("div");
    div.innerHTML = `<p id="plan">Индивидуальная<br> планировка дома</p>`;

    const logo = document.createElement("img");
    logo.id = "img-group";
    logo.src = 'images/group.svg';
    logo.alt = 'group';
    div.prepend(logo);

    const cardChildrens = [img, h2, divTxt, divTxt2, btn, div]
    cardChildrens.forEach((cardChild)  => article.appendChild(cardChild))

    return article;
}

const btn = document.querySelector(".houses");
btn.addEventListener('click', (event) => {
    const navButtonsText = ['❯', '❮']

    if (!navButtonsText.includes(event.target.innerText)) {
        findCard(event.target.innerText)
    }
})

function findCard(houseType) {
    let tabs = document.querySelector(".houses__cards");

    if (!tabs) {
        tabs = document.createElement("div");
        tabs.className = "houses__cards";
        container.appendChild(tabs);
    } else {
        tabs.innerHTML = '';
    }
    let houses

    if (houseType === 'Смотреть все') {
        houses = [...housesArr]
    }else {
        houses = housesArr.filter((item) => {
            return item.type === houseType;
        });
    }

    for (let i = 0; i < houses.length; i++) {
        let temp = createCard(houses[i]);
        tabs.appendChild(temp);
    }
}