import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  constructor(private router: Router){ }

  ngOnInit(): void{

  }
  ondashboardClick(){

    this.router.navigateByUrl('adminDashboard');
  }
  onemployeeInformationClick(){
    this.router.navigateByUrl('employeeInformation');
  }

  oncustomerInformationClick(){
    this.router.navigateByUrl('customerInformation');
  }
}
