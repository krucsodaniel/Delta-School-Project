import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, from, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);

  public get loggedInStatus$(): Observable<boolean | null> {
    return this.loggedInStatus.asObservable();
  }

  constructor(
    private router: Router,
    private auth: Auth,
  ) { }

  public checkAuthState(): void {
    this.auth.onAuthStateChanged({
      next: (user) => {
        if (user) {
          this.loggedInStatus.next(true);
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => { }
    })
  }

  public login(loginData: any): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, loginData.email, loginData.password)).pipe(
      tap((userCredential) => {
        this.router.navigate(['admin/trainingadmin']);
        this.loggedInStatus.next(true);
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    ) as Observable<UserCredential>;
  }

  public async logout(): Promise<void> {
    await this.auth.signOut();
    this.loggedInStatus.next(false);
    this.router.navigate(['admin']);
  }


}
