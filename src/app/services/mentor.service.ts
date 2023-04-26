import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, DocumentData, Firestore, query, setDoc, where } from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';
import { MentorModel } from '../model/mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  mentorRef = collection(this.firestore, "teachers")

  constructor(private firestore: Firestore) { }

  getAll(): Observable<MentorModel[]> {
    return collectionData(this.mentorRef, { idField: 'id' }) as Observable<MentorModel[]>;
  }

  getOneById(id: string): Observable<MentorModel> {
    const mentorDocRef = doc(this.firestore, `teachers/${id}`);
    return docData(mentorDocRef, {idField: 'id'}) as Observable<MentorModel>;
  }

  delete(id: string): Observable<void> {
    const mentorDocRef = doc(this.firestore, `teachers/${id}`);
    return from(deleteDoc(mentorDocRef));
  }

  create(mentor: MentorModel): Observable<DocumentData> {
    return from(addDoc(this.mentorRef, mentor));
  }
  
  update(mentor: MentorModel): Observable<void> {
    const mentorDocRef = doc(this.firestore, `teachers/${mentor.id}`);
    return from(setDoc(mentorDocRef, mentor));
  }
  


}
