import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicantModel } from 'src/app/model/applicant.model';
import { TrainingModel } from 'src/app/model/training.model';
import { ApplicationService } from 'src/app/services/application.service';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-training-admin',
  templateUrl: './training-admin.component.html',
  styleUrls: ['./training-admin.component.scss']
})
export class TrainingAdminComponent implements OnInit {

  trainings?: TrainingModel[];

  applicants?:ApplicantModel[];

  chosenTraining: TrainingModel = {} as TrainingModel;

  trainingForm!: FormGroup;

  imgName: string;


  constructor(
    private trainingDataService: TrainingdataService,
    private applicationService: ApplicationService,
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {

    this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[])=>{this.trainings = data}
    });

    this.applicationService.getAll().subscribe({
      next: (data: ApplicantModel[])=>{this.applicants = data}
    });

    this.trainingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      teacher: new FormControl('', [
        Validators.required
      ]),
      imageURL: new FormControl('', [
        Validators.required
      ])
    })

  }

  setImgName() {
    this.imgName = this.trainingForm.get('name').value;
  }

  chooseTraining(training: TrainingModel) {
    this.chosenTraining = training;
  }

  deleteTraining() {
    if (this.chosenTraining.id) {
      this.trainingDataService.delete(this.chosenTraining.id);
      this.deleteFileStorage(this.chosenTraining.name)
    }
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref("trainings/");
    storageRef.child(name).delete();
  }

  saveTraining(): void {
    if(this.trainingForm.valid){
    this.trainingDataService.create(this.trainingForm.value);
    this.trainingForm.reset();
  }
  }

  getApplicantsNumber(name:string):number{
    return this.applicants?.filter(applicant => applicant.course === name).length || 0;
  }

  urlSet(url: string) {
    this.trainingForm.patchValue({imageURL: url})
  }
}
