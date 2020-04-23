import { Component } from "@angular/core";


@Component({
	selector: "Cakes",
	moduleId: module.id,
	templateUrl: "./cakes.component.html",
	styleUrls: ['./cakes.component.css']
})
export class CakesComponent {

c="";

redVelvet()
{
    this.c="hi";
}
cheese(){
    this.c="hi";
}

oreo(){
    this.c="hi";
}

}
