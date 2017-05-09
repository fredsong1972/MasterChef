import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";  
import { Recipe } from "../viewmodels/recipe";
import { AppService } from "../services/app.service";

@Component({
    selector: 'recipe-detail',
    templateUrl: '../partials/edit.html'
})

export class RecipeDetailComponent implements OnInit {
    item: Recipe;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = params['id'];
            this.AppService.getRecipe(id).subscribe(item => this.item = item);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public editRecipe() {
        this.AppService.saveRecipe(this.item).subscribe(
            item => { this.item = item; this.router.navigate(['/recipes']); },
            error => console.log(error)
        )
    }
}