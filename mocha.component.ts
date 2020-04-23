import { ItemEventData } from "tns-core-modules/ui/list-view"
//import { Component, OnInit } from "@angular/core";
import { Component } from "@angular/core";


@Component({
	selector: "Mocha",
	moduleId: module.id,
	templateUrl: "./mocha.component.html",
	styleUrls: ['./mocha.component.css']
})
export class MochaComponent { //implements OnInit {
	x = 0;
    o="";
    constructor() {
	}

Mocha: { name: string, imageSrc: string }[] = [
		{ name: "vanilla mocha", imageSrc: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
		{ name: "BlueBerry mocha", imageSrc: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
        { name: "cinnamon mocha", imageSrc: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
        { name: "Central Perk special mocha", imageSrc: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
        { name: " Mocha Latte", imageSrc: "https://images.unsplash.com/photo-1533776992670-a72f4c28235e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
]
	onItemTap(args: ItemEventData): void {
		this.x = this.x + 1;
    }

    del(){
        this.x=this.x-1;
    }

    done(){
        this.o="your order has been placed";
    }


	//ngOnInit(): void {}
}
