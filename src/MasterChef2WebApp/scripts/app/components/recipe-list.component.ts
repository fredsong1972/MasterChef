import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Recipe } from "../viewmodels/recipe";
import { AppService } from "../services/app.service";

@Component({
    selector: 'recipe-list',
    templateUrl: '../partials/recipes.html'
})

export class RecipeListComponent implements OnInit {

    items: Recipe[];
    errorMessage: string;

    constructor(private appService: AppService) {
        //called first time before the ngOnInit()
    }

    ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges()
        var service = this.appService.getAllRecipes();
        service.subscribe(
            items => {
                this.items = items;
                //for (let r of this.items)
                //{
                //    r.show = true;
                //}
            },
            error => this.errorMessage = <any>error
        );
    }

    public Expand(recipe:Recipe) {
        recipe.show = !recipe.show;
    }

}