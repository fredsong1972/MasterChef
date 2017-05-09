import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";  
import { RecipeItem } from "../viewmodels/recipeItem";
import { AppService } from "../services/app.service";

@Component({
    selector: 'item-new',
    templateUrl: '../partials/addItem.html'
})

export class ItemNewComponent implements OnInit {
    item: RecipeItem;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var parentId = params['id'];
            this.item = new RecipeItem();
            this.item.parentId = parentId;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public addRecipeItem() {
        this.AppService.saveItem(this.item).subscribe(
            item => { this.item = item; this.router.navigate(['/recipes']);},
            error => console.log(error)
        )
    }

}