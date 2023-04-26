import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, DocumentData, Firestore, query, where } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { ApplicantModel } from '../model/applicant.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  applicantsRef = collection(this.firestore, "applicants")

  constructor(private firestore: Firestore) { }

  getAll(): Observable<ApplicantModel[]> {
    return collectionData(this.applicantsRef, { idField: 'id' }) as Observable<ApplicantModel[]>;
  }

  getByEmail(email: string) {
    const q = query(this.applicantsRef, where("email", "==", email));
    return collectionData(q, {idField: 'id'}) as Observable<ApplicantModel[]>;
  }

  create(applicant: ApplicantModel): Observable<DocumentData> {
    return from(addDoc(this.applicantsRef, applicant));
  }

  delete(id: string): Observable<void> {
    const applicantDoc = doc(this.firestore, `applicants/${id}`);
    return from(deleteDoc(applicantDoc));
  }
}
