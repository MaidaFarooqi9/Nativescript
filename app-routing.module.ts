import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { FirstComponent } from "./prog-ns/progcomp.component";
import { LatteComponent } from "./Latte/latte.component";
import { MochaComponent } from "./Mocha/mocha.component";
import{LoginComponent} from "./Loginform/Loginform.component";
import {TabViewComponent} from "./TabView/tabview.component";
import {CakesComponent} from "./TabView/Cakes/cakes.component";
//import { TryComponent } from "./try/try.component";
//import { NextComponent } from "./next/next.component";

//import { ItemsComponent } from "./item/items.component";
//import { ItemDetailComponent } from "./item/item-detail.component";


const routes: Routes = [


{  path: "", redirectTo: "/Loginform", pathMatch: "full" },
{path:"Loginform",component:LoginComponent},
{path:"TabView",component:TabViewComponent,
children:[{ path: "prog-ns", component: FirstComponent,outlet:'coffee'},
{path:"Cakes" ,component:CakesComponent ,outlet:'cakes'}
]},
{ path: "Latte", component:LatteComponent  },
{path:"Mocha",component:MochaComponent}



];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
