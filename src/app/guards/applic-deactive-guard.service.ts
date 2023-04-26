import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from '../core/components/application/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class ApplicDeactiveGuardService implements CanDeactivate<FormComponent> {

  constructor() { }

  canDeactivate(component: FormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const formValue = component.applicationForm.value;
    const formNotSaved = (formValue.name || formValue.email || formValue.address || formValue.phoneNumber);

    if (formNotSaved) {
      return confirm('Az űrlapon nem mentett adatok vannak! Biztosan folytatod a jelentezés mentése nélkül?');
    }
    return true;
  }
}
