// this button
document.querySelector(".go-to-recipes").addEventListener("click", function () {
  window.location.href = "./pages/recipes.html";
});

const myRecipes = document.querySelector(".display-recipes");

fetch(`https://dummyjson.com/recipes`)
  .then((res) => res.json())
  .then((data) => {
    // Extract 4 Recipes
    const extractedRecipes = data.recipes.filter(
      (recipe) => recipe.id >= 21 && recipe.id <= 24,
    );
    myRecipes.innerHTML += extractedRecipes
      .map((recipe) => {
        return `
          <div class="card">
            <div class="card-img">
              <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="content">
              <h3 class="title">${recipe.name}</h3>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sed quae sit nulla! Itaque, recusandae.</p>
              <button class="btn go-to-recipe" data-id="${recipe.id}">See Recipe ></button>
            </div>
          </div>
        `;
      })
      .join("");

    document
      .querySelectorAll(".go-to-recipe")
      .forEach((button) => button.addEventListener("click", function (e) {
        let id = e.target.dataset.id;
        window.location.href = `./pages/recipe-details.html?id=${id}`;
      }));
  });
