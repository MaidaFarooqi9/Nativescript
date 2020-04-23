import { Component, OnInit ,ViewChild,ElementRef} from "@angular/core";
import{Router} from "@angular/router";
import{FormGroup, FormControl, Validators} from "@angular/forms";

import{TextField} from "tns-core-modules/ui/text-field";
//import { alert, prompt } from "tns-core-modules/ui/dialogs";
//import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./Loginform.component.html",
    styleUrls: ["./Loginform.component.css"]
})
export class LoginComponent implements OnInit {



@ViewChild('emailEL',{static:false}) EmailEl:ElementRef<TextField>;
@ViewChild('passwordEl',{static:false}) PasswordEl:ElementRef<TextField>;


    x='';


    form:FormGroup;
    emailControlValid=true;
passwordControlValid=true;
    constructor(private router:Router) {
    }
    isLoggingIn = true;
    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    login() {

//this.router.navigate(['/prog-ns']);

this.router.navigate(['/TabView']);
(this.EmailEl.nativeElement.focus );
        (this.PasswordEl.nativeElement.focus );
        (this.PasswordEl.nativeElement.dismissSoftInput);
const email=this.form.get('email').value;
const password = this.form.get('password').value;

    }



    ngOnInit(): void {
        this.form=new FormGroup({
        email:new FormControl(null,{updateOn:'blur',validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{updateOn:'blur',validators:[Validators.required,Validators.minLength(5)]})

        });

        this.form.get('email').statusChanges.subscribe(status =>{this.emailControlValid=status==='VALID'});

        this.form.get('password').statusChanges.subscribe(status =>{this.passwordControlValid=status==='VALID'});

    }
}
