import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent  implements OnInit{


  constructor(private router: Router){ }

  ngOnInit(): void{

  }
  onRegisterClick(){
    this.router.navigateByUrl('/login');
  }
  onLoginClick(){
    this.router.navigateByUrl('/login');
  }
}
