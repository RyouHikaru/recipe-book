import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Cookie',
      'A test recipe for cookie',
      'https://i.stack.imgur.com/97Y6o.jpg'
    ),
    new Recipe(
      'Another Cookie',
      'Another test recipe for cookie',
      'https://i.stack.imgur.com/97Y6o.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
