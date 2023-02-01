import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor(private router: Router){ }

  ngOnInit(): void{

  }

  onLearnMoreClick(){
    this.router.navigateByUrl('/learnmore');
  }

  onSignUpClick(){
    this.router.navigateByUrl('/login');
  }



  booknow(){
    alert("Succesfully Submitted! To get an update, Login into your account");

  }

  booklater(){
    alert("Succesfully added to your on hold list!");
  }
}
