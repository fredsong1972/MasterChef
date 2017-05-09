import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Recipe } from "../viewmodels/recipe";
import { RecipeStep } from "../viewmodels/recipeStep";
import { RecipeItem } from "../viewmodels/recipeItem";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {
    constructor(private http: Http)
    { }

    //URL to web api
    private recipeUrl = 'api/recipes/';
    private stepUrl = 'api/recipes/step/';
    private itemUrl = 'api/recipes/item/';

    getAllRecipes() {
        return this.http.get(this.recipeUrl)
            .map(response => <Recipe>response.json())
            .catch(this.handleError);
    }

    getRecipe(id: string) {
        if (id == null) throw new Error("id is required.");
        var url = this.recipeUrl + id;
        return this.http.get(url)
            .map(response => <Recipe>response.json())
            .catch(this.handleError);
    }

    saveRecipe(recipe: Recipe) {
        if (recipe == null) throw new Error("recipe is required.");
        var url = this.recipeUrl;
        return this.http.post(url, recipe)
            .map(response => <Recipe>response.json())
            .catch(this.handleError);
    }

    deleteRecipe(id:string) {
        if (id == null) throw new Error("id is required.");
        var url = this.recipeUrl + id;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    getStep(id: string) {
        if (id == null) throw new Error("id is required.");
        var url = this.stepUrl + id;
        return this.http.get(url)
            .map(response => <RecipeStep>response.json())
            .catch(this.handleError);
    }

    saveStep(step: RecipeStep) {
        if (step == null) throw new Error("recipe step is required.");
        var url = this.stepUrl;
        return this.http.post(url, step)
            .map(response => <RecipeStep>response.json())
            .catch(this.handleError);
    }

    deleteStep(id: string) {
        if (id == null) throw new Error("id is required.");
        var url = this.stepUrl + id;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    getItem(id: string) {
        if (id == null) throw new Error("id is required.");
        var url = this.itemUrl + id;
        return this.http.get(url)
            .map(response => <RecipeItem>response.json())
            .catch(this.handleError);
    }

    saveItem(item: RecipeItem) {
        if (item == null) throw new Error("recipe item is required.");
        var url = this.itemUrl;
        return this.http.post(url, item)
            .map(response => <RecipeItem>response.json())
            .catch(this.handleError);
    }

    deleteItem(id: string) {
        if (id == null) throw new Error("id is required.");
        var url = this.itemUrl + id;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
