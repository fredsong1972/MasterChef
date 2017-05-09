import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";  
import { RecipeItem } from "../viewmodels/recipeitem";
import { AppService } from "../services/app.service";

@Component({
    selector: 'item-detail',
    templateUrl: '../partials/editItem.html'
})

export class ItemDetailComponent implements OnInit {
    item: RecipeItem;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = params['id'];
            this.AppService.getItem(id).subscribe(item => this.item = item);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public editRecipeItem() {
        this.AppService.saveItem(this.item).subscribe(
            item => { this.item = item; this.router.navigate(['/recipes']); },
            error => console.log(error)
        )
    }

}