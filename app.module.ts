import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//import { ItemsComponent } from "./item/items.component";
//import { ItemDetailComponent } from "./item/item-detail.component";



import {FirstComponent } from "./prog-ns/progcomp.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LatteComponent } from "./Latte/latte.component";
//import { TryComponent } from "./try/try.component";
//import { NextComponent } from "./next/next.component";
//import{BackComponent} from "./back/back.component";
import{LoginComponent} from "./Loginform/Loginform.component";
import { MochaComponent } from "./Mocha/mocha.component";
import {TabViewComponent} from"./TabView/tabview.component";
import {CakesComponent} from "./TabView/Cakes/cakes.component";
import { ReactiveFormsModule } from "@angular/forms";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,NativeScriptFormsModule, ReactiveFormsModule,
        AppRoutingModule
],
    declarations: [
        AppComponent,

//TryComponent,
//NextComponent,
//BackComponent,

//        ItemsComponent,
  //      ItemDetailComponent,
       LatteComponent,
       MochaComponent,
        FirstComponent ,
       LoginComponent,
       TabViewComponent,
       CakesComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
