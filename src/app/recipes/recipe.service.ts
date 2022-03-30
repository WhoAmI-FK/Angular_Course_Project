import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel','A super-tasty Schnitzel - just awesome!','https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    [
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe('Big Fat Burger','What else you need to say?','https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Burger_King_-_Angus_XT_Burger.tiff/lossless-page1-1200px-Burger_King_-_Angus_XT_Burger.tiff.png',
    [
      new Ingredient('Buns',2),
      new Ingredient('Meat',1),
      new Ingredient('Cucumber', 2)
    ])
  ];
  getRecipes(){
    return this.recipes.slice();
  }
  constructor(private slService: ShoppingListService){

  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
