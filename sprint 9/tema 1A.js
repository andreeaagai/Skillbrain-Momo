const recipe = {
  title: "Pizza",
  portions: 3,
  ingredients: ["ham", "cheese", "ketchup"]
}

function getMyRecipe(title, portions, ingredients) {
    recipe.title = title;
    recipe.portions = portions;
    recipe.ingredients = ingredients;

return [title, portions, ingredients];
}
console.log(recipe);
const recipe2 = getMyRecipe("Tarte", 4, ["sugar", "milk", "butter", "eggs", "mini fruits"]);
console.log(recipe2);
