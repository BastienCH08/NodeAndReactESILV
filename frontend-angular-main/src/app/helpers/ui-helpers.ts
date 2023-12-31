import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms'
@Injectable({
    providedIn: 'root'
  })
export class UIHelpers {
    checkErrors(fc: any, form: any): boolean {
        if(fc.invalid && (fc.touched || fc.dirty || form.submitted)) {
            return true;
        } else {
            return false;
        }
    }

}
