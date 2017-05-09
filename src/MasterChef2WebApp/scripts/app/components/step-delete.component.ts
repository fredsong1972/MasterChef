import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";  
import { RecipeStep } from "../viewmodels/recipeStep";
import { AppService } from "../services/app.service";

@Component({
    selector: 'step-delete',
    templateUrl: '../partials/deleteStep.html'
})

export class StepDeleteComponent implements OnInit {
    item: RecipeStep;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = params['id'];
            this.AppService.getStep(id).subscribe(item => this.item = item);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public deleteStep() {
        this.AppService.deleteStep(this.item.id).subscribe(
            () => this.router.navigate(['/recipes']),
            error => console.log(error)
        )
    }

}