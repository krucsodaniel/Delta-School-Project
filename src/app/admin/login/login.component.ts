import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })

  public get email(): FormControl{
    return this.loginForm.controls.email as FormControl;
  }

  public get password(): FormControl{
    return this.loginForm.controls.password as FormControl;
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public login(){
    this.authService.login(this.loginForm.value).subscribe();
  }

}