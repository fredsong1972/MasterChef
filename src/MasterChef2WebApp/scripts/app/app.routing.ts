import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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

const routes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipeListComponent
    },
    {
        path: 'recipes/edit/:id',
        component: RecipeDetailComponent
    },
    {
        path: 'recipes/add',
        component: RecipeNewComponent
    },
    {
        path: 'recipes/delete/:id',
        component: RecipeDeleteComponent
    },
    {
        path: 'recipes/editStep/:id',
        component: StepDetailComponent
    },
    {
        path: 'recipes/addStep/:id',
        component: StepNewComponent
    },
    {
        path: 'recipes/deleteStep/:id',
        component: StepDeleteComponent
    },
    {
        path: 'recipes/editItem/:id',
        component: ItemDetailComponent
    },
    {
        path: 'recipes/addItem/:id',
        component: ItemNewComponent
    },
    {
        path: 'recipes/deleteItem/:id',
        component: ItemDeleteComponent
    },
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);  