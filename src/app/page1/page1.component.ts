import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
 
@Component({
    selector: 'app-page1',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.css']
})
export class Page1Component {
 
    constructor(private router: Router) { }
 
    navigate() {
        this.router.navigate(["page2"]);
    }

    Celcius : number = 0;
  Fahrenhet : number = 0;

  CelciusToFahrenhet() {
    this.Fahrenhet = this.Celcius * 9/5 + 32;
    //this.miles = this.kilometers * 0.621371192237;
  }

  fahrenthetToCelcius() {
    this.Celcius= this.Fahrenhet - 32 * 5/9
    //this.kilometers = this.miles / 0.621371192237; 
  }

  ngOnInit() {
  }
 
}