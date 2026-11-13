

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



/* =========================================
   INTERACTIVE TECHNICAL SKILLS TABS
========================================= */

const skillTabs = document.querySelectorAll(".skill-tab");
const skillPanels = document.querySelectorAll(".skill-panel");

skillTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    // Remove active state from all tabs
    skillTabs.forEach((item) => {
      item.classList.remove("active");
    });

    // Hide all skill panels
    skillPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    // Activate selected tab
    tab.classList.add("active");

    // Show corresponding panel
    const selectedPanel = document.getElementById(
      tab.dataset.tab + "-panel"
    );

    if (selectedPanel) {
      selectedPanel.classList.add("active");
    }

  });

});


/* =========================================
   CAREER TIMELINE
========================================= */

// Allow only one career entry to remain open
const journeyItems = document.querySelectorAll(".journey-item");

journeyItems.forEach((item) => {

  item.addEventListener("toggle", () => {

    if (item.open) {

      journeyItems.forEach((otherItem) => {

        if (otherItem !== item) {
          otherItem.open = false;
        }

      });

    }

  });

});


console.log("About section interactions loaded");
