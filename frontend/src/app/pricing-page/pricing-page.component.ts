import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent {
 
  booknow(){
    alert("Succesfully Submitted! To get an update, Login into your account");

  }

  booklater(){
    alert("Succesfully added to your on hold list!");
  }


}
