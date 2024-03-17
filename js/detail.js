let shopDataDetail = JSON.parse(localStorage.getItem("shop"))
  ? JSON.parse(localStorage.getItem("shop"))
  : [];
let detailId = localStorage.getItem("id") ? localStorage.getItem("id") : 1;

function setStoregeData(id) {
  localStorage.setItem("id", id);
  localStorage.setItem("shop", JSON.stringify(shopData));
}

const deltailSection = document.querySelector(".detail");
function showDetail() {
  const detailData = shopDataDetail.filter((item) => item.id == detailId);
  deltailSection.innerHTML = `
    <img src="${detailData[0].image}" alt="" />
    <h1>${detailData[0].title}</h1>
    <p>
     ${detailData[0].description}
    </p>
    <h4>Price: ${detailData[0].price}$</h4>
  `;
}
showDetail();
