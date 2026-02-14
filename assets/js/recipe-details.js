let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let details = document.querySelector(".details-recipes");

fetch(`https://dummyjson.com/recipes/${id}`)
  .then((res) => res.json())
  .then((data) => {
    details.innerHTML = `
      <div class="details">
        <div class="container">
          <h2 class="title">${data.name}</h2>
          <div class="img-container">
            <img src="${data.image}" alt="${data.name}">
          </div>
          <div class="ingredients">
            <h2>Ingredients:</h2>
            <p>${data.ingredients.join("")}</p>
            </div>
            <div class="instructions">
            <h2>Instructions:</h2>
            <ol>
            ${data.instructions.map((step, index) => `<li>${index+1}.${step}</li>`).join("")}
            </ol>
            </div>
            <button class="btn-recipes">See all recipes</button>
        </div>
      </div>
    `;

    document.querySelector(".btn-recipes").addEventListener("click", () => {
      window.location.href = "./recipes.html";
    });
  });
