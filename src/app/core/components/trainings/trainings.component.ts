import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApplicantModel } from 'src/app/model/applicant.model';
import { TrainingModel } from 'src/app/model/training.model';
import { ApplicationService } from 'src/app/services/application.service';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit, OnDestroy {

  trainings?: TrainingModel[];
  dataSubscription?: Subscription;
  applicants: ApplicantModel[];

  constructor(
    private trainingDataService: TrainingdataService,
    private router: Router,
    private applicationService: ApplicationService
    ) { }

  ngOnInit(): void {
    this.dataSubscription = this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[])=>{this.trainings = data}
    });

    this.applicationService.getAll().subscribe({
      next: (data: ApplicantModel[])=>{this.applicants = data}
    });

  }

  goToApplication(): void {
    this.router.navigate(['jelentkezes']);
  }

  ngOnDestroy(): void {
    // console.log('trainings leíratkozás');
    this.dataSubscription?.unsubscribe();
  }

  getApplicantsNumber(name:string):number{
    return this.applicants?.filter(applicant => applicant.course === name).length;
  }
  

}
