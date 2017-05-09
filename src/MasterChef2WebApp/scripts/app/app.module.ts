///<reference path="../../typings/index.d.ts"/>
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import "rxjs/Rx";

import { AppComponent } from "./app.component";
import { RecipeListComponent } from "./components/recipe-list.component";
import { RecipeDetailComponent } from "./components/recipe-detail.component";
import { RecipeNewComponent } from "./components/recipe-new.component";
import { RecipeDeleteComponent } from "./components/recipe-delete.component";
import { StepDetailComponent } from "./components/step-detail.component";
import { StepNewComponent } from "./components/step-new.component";
import { StepDeleteComponent } from "./components/step-delete.component";
import { ItemDetailComponent } from "./components/item-detail.component";
import { ItemNewComponent } from "./components/item-new.component";
import { ItemDeleteComponent } from "./components/item-delete.component";

import { AppRouting } from "./app.routing";    
import { AppService } from "./services/app.service";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeNewComponent,
        RecipeDeleteComponent,
        StepDetailComponent,
        StepNewComponent,
        StepDeleteComponent,
        ItemDetailComponent,
        ItemNewComponent,
        ItemDeleteComponent,
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting

    ],
    // providers
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }  