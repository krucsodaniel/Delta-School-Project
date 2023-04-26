import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public loggedInStatus$?: Observable<boolean | null>;

  constructor(
    private authService: AuthService
  ) {
    this.authService.checkAuthState();
    this.loggedInStatus$ = authService.loggedInStatus$;
    
  }

  ngOnInit(): void {
  }

  public async logout(): Promise<void> {
    await this.authService.logout();
  }

}
