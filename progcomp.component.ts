import  { Component} from '@angular/core';
import{Router} from '@angular/router';
@Component({
    selector: 'prog-ns',
    templateUrl: '/progcomp.component.html',
     styleUrls:['./progcomp.component.css'],
     moduleId:module.id

})

export class FirstComponent {


    constructor(private router: Router) {
    }

    latte() {

        this.router.navigate(['/Latte']);
    }
    mocha(){

        this.router.navigate(['/Mocha']);
    }
    cappuchino(){
        this.router.navigate(['/Cappuchino']);
    }
}
