import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Recipe } from "./viewmodels/recipe";
import { AppService } from "./services/app.service";

@Component({
    selector: 'masterchef2',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
   title = "Master Chef Recipes";
}
