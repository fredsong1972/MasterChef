import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";  
import { Recipe } from "../viewmodels/recipe";
import { AppService } from "../services/app.service";

@Component({
    selector: 'recipe-new',
    templateUrl: '../partials/add.html'
})

export class RecipeNewComponent implements OnInit {
    item: Recipe;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.item = new Recipe();
    }

    ngOnDestroy() {
    }

    public addRecipe() {
        this.AppService.saveRecipe(this.item).subscribe(
            item => { this.item = item; this.router.navigate(['/recipes']);},
            error => console.log(error)
        )
    }

}