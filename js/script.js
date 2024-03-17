const shopData = [
  {
    id: 1,
    image: "./images/black-rose.jpg",
    title: "Black Rose",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 50,
    category: "flowers",
  },
  {
    id: 2,
    image: "./images//arhideya.jpg",
    title: "Arhideya",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 70,
    category: "flowers",
  },
  {
    id: 3,
    image: "./images/moon-flower.jpg",
    title: "Moon Flower",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 30,
    category: "flowers",
  },
  {
    id: 4,
    image: "./images/red-rose.jpeg",
    title: "Red Rose",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 60,
    category: "flowers",
  },
  {
    id: 5,
    image: "./images/tulip.jpeg",
    title: "Tultip",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 20,
    category: "flowers",
  },
  {
    id: 6,
    image: "./images/dress.jpeg",
    title: "Dress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 40,
    category: "clothes",
  },
  {
    id: 7,
    image: "./images/gown.webp",
    title: "Gown",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 50,
    category: "clothes",
  },
  {
    id: 8,
    image: "./images/shirt.webp",
    title: "Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 13,
    category: "clothes",
  },
  {
    id: 9,
    image: "./images/sweater.webp",
    title: "Sweater",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 23,
    category: "clothes",
  },
  {
    id: 10,
    image: "./images/trouser.png",
    title: "Trouser",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 21,
    category: "clothes",
  },
  {
    id: 11,
    image: "./images/kalonka.jpg",
    title: "Kalonka",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 11,
    category: "accessories",
  },
  {
    id: 12,
    image: "./images/macbook.jpg",
    title: "Macbook",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 3000,
    category: "accessories",
  },
  {
    id: 13,
    image: "./images/naushnik.webp",
    title: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 20,
    category: "accessories",
  },
  {
    id: 14,
    image: "./images/phone.webp",
    title: "Samsung",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 400,
    category: "accessories",
  },
  {
    id: 15,
    image: "./images/samrt-watch.webp",
    title: "Smart Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam ipsam, porro explicabo molestias unde aut cumque tenetur repudiandae quod odio. Temporibus, iste doloremque ex enim laboriosam maiores numquam cum.",
    price: 40,
    category: "accessories",
  },
];

// show shopping card

const flowersContainer = document.querySelector(".flowers__list"),
  clothesContainer = document.querySelector(".clothes__list"),
  accessoriesContainer = document.querySelector(".accessories__list");

function addDataHtml(resourse, container) {
  container.innerHTML += `
    <li class="clothes__item">
      <div class="clothes__content">
        <img src=${resourse.image} alt=${resourse.title} />
        <div class="clothes__body">
          <h4>${resourse.title}</h4>
          <p>
            ${resourse.description.slice(0, 60)}...
          </p>
          <h5>$${resourse.price}</h5>
          <button type="button" onclick="addToStore(${
            resourse.id
          })">Add To Store</button>
          <a href="./detail.html" onclick="setStoregeData(${
            resourse.id
          })">Show More</a>
        </div>
      </div>
    </li>
  `;
}

function showShopData(resourse, container) {
  resourse.forEach((item) => {
    if (item.category == "flowers" && container.classList == "flowers__list") {
      addDataHtml(item, container);
    } else if (
      item.category == "clothes" &&
      container.classList == "clothes__list"
    ) {
      addDataHtml(item, container);
    } else if (
      item.category == "accessories" &&
      container.classList == "accessories__list"
    ) {
      addDataHtml(item, container);
    }
  });
}

showShopData(shopData, flowersContainer);
showShopData(shopData, clothesContainer);
showShopData(shopData, accessoriesContainer);

// site dark mode and light mode

const body = document.querySelector("body"),
  sunIcon = document.querySelector(".fa-sun"),
  moonIcon = document.querySelector(".fa-moon");

function siteMode() {
  body.classList.toggle("mode");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
}

sunIcon.addEventListener("click", () => siteMode());
moonIcon.addEventListener("click", () => siteMode());

// search

const search = document.querySelector(".nav__search"),
  searchInput = document.querySelector(".nav__search input");

search.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchValue = searchInput.value.toLowerCase();
  console.log(searchValue);
  let searchedText = document.querySelectorAll(".clothes__body h4");
  searchedText.forEach((item) => {
    if (item.textContent.toLowerCase().includes(searchValue)) {
      item.parentElement.parentElement.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.parentElement.parentElement.classList.add("hidden");
    }
  });
  searchInput.value = "";
});
