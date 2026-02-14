let recipesCards = document.querySelector(".recipes-cards");
let search = document.querySelector(".recipes-search");
function getRecipes(url) {
  let recipeReq = new XMLHttpRequest();
  recipeReq.open("GET", url, true);
  recipeReq.onload = function () {
    recipesCards.innerHTML = "";
    if (this.status == 200 && this.readyState == 4) {
      let recipesData = JSON.parse(this.responseText).recipes;
      recipesCards.innerHTML += recipesData
        .map((el) => {
          return `
        <div class="card">
          <div class="card-img">
            <img src="${el.image}" alt="${el.name}">
          </div>
          <div class="content">
          <h3 class="title">${el.name}</h3>
          <p class="text"><span>Ingredients:</span>${el.ingredients} </p>
          <button class="btn" data-id="${el.id}">See Recipe ></button>
          </div>
        </div>
      `;
        })
        .join("");
    }
  };
  recipeReq.send();
}
getRecipes("https://dummyjson.com/recipes");
search.addEventListener("input", function (val) {
  let searchVal = val.target.value.trim();
  getRecipes(`https://dummyjson.com/recipes/search?q=${searchVal}`);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    let id = e.target.dataset.id;
    window.location.href = `recipe-details.html?id=${id}`;
  }
});
