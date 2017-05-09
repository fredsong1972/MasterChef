import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";  
import { RecipeStep } from "../viewmodels/recipestep";
import { AppService } from "../services/app.service";

@Component({
    selector: 'step-detail',
    templateUrl: '../partials/editStep.html'
})

export class StepDetailComponent implements OnInit {
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

    public editRecipeStep() {
        this.AppService.saveStep(this.item).subscribe(
            item => { this.item = item; this.router.navigate(['/recipes']); },
            error => console.log(error)
        )
    }

}