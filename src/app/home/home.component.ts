import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
 
@Component({
    selector: 'Home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
    constructor(private router: Router) { }
 
    navigate() {
        
        this.router.navigate(["page1"]);
        this.router.navigate(["page2"]);
    }
}

