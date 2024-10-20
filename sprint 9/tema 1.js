function getMyRecipe(title, portions, ingredients) {
    const recipe = {
      titleRecipe: title,
      portionsRecipe: portions,
      ingredientsRecipe: ingredients
    }
    console.log(`Recipe title: ${recipe.titleRecipe}`);
    console.log(`Number of portions: ${recipe.portionsRecipe}`);
    console.log(`Recipe ingredients: ${recipe.ingredientsRecipe}`);
    return recipe;
  }

getMyRecipe("Tarte", 4, ["sugar", " milk", " butter", " eggs", " mini fruits."]);
getMyRecipe("Pizza", 3, ["ham", " cheese", " ketchup."]);
  
  
  