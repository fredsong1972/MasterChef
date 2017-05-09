import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";  
import { RecipeItem } from "../viewmodels/recipeItem";
import { AppService } from "../services/app.service";

@Component({
    selector: 'item-delete',
    templateUrl: '../partials/deleteItem.html'
})

export class ItemDeleteComponent implements OnInit {
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

    public deleteItem() {
        this.AppService.deleteItem(this.item.id).subscribe(
            () => this.router.navigate(['/recipes']),
            error => console.log(error)
        )
    }

}