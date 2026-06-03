

const recipeImages = [
"./assets/GroceryList.png",
"./assets/Add.png"
];

let currentRecipeIndex = 0;

function showRecipeImage() {
  document.getElementById("recipe-slider-image").src =
  recipeImages[currentRecipeIndex];
}

window.nextSlide = function () {
  currentRecipeIndex =
  (currentRecipeIndex + 1) % recipeImages.length;

  console.log("Current Index:", currentRecipeIndex);

  showRecipeImage();
}

window.prevSlide = function () {
  currentRecipeIndex =
  (currentRecipeIndex - 1 + recipeImages.length) %
  recipeImages.length;

  showRecipeImage();
}






function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


console.log("Script Loaded");
