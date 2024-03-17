let showModal = document.querySelector(".fa-cart-shopping"),
  closeModal = document.querySelector(".modal__header button"),
  modal = document.querySelector(".modal"),
  modalList = document.querySelector(".modal__list");

showModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// add to store

let storeData = [];
function addToStore(id) {
  const isExist = storeData.some((item) => item.id == id);
  if (!isExist) {
    shopData.forEach((item) => {
      if (item.id == id) {
        storeData.push(item);
        showModalItem(storeData);
      }
    });
  }
}

// delete modal item

function deleteModalItem(id) {
  storeData = storeData.filter((item) => item.id != id);
  showModalItem(storeData);
}

// show modal item
function showModalItem(data) {
  modalList.innerHTML = "";
  data.forEach((item) => {
    modalList.innerHTML += `
      <li class="modal__item">
        <img src=${item.image} alt=${item.title} />
        <div class="modal__body">
          <h4>${item.title}</h4>
          <h5>Price: ${item.price}$</h5>
        </div>
        <button class="close__btn" onclick="deleteModalItem(${item.id})">
          <img src="./icons/close.svg" alt="close icon" />
        </button>
      </li>
    `;
  });
}
