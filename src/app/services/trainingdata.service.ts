import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, DocumentData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

import { TrainingModel } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingdataService {

  trainingsRef = collection(this.firestore, "trainings");

  constructor(private firestore: Firestore) {}

  getAll(): Observable<TrainingModel[]> {
    return collectionData(this.trainingsRef, {idField: 'id'}) as Observable<TrainingModel[]>;
  }

  create(training: TrainingModel): Observable<DocumentData> {
    return from(addDoc(this.trainingsRef, training));
  }

  delete(id: string): Observable<void> {
    const trainingDoc = doc(this.firestore, `trainings/${id}`);
    return from(deleteDoc(trainingDoc));
  }
}
