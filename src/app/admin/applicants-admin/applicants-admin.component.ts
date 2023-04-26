import { Component, OnInit } from '@angular/core';
import { ApplicantModel } from 'src/app/model/applicant.model';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-applicants-admin',
  templateUrl: './applicants-admin.component.html',
  styleUrls: ['./applicants-admin.component.scss']
})
export class ApplicantsAdminComponent implements OnInit {

  applicants?: ApplicantModel[];
  chosenApplicant: ApplicantModel = {} as ApplicantModel;

  constructor(
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
    this.applicationService.getAll().subscribe({
      next: (data: ApplicantModel[]) => { this.applicants = data }
    });
  }

  chooseApplicant(applicant: ApplicantModel) {
    this.chosenApplicant = applicant;
    console.log(this.chosenApplicant);
  }


  deleteApplicant() {
    if (this.chosenApplicant.id) {
      this.applicationService.delete(this.chosenApplicant.id);
    }
  }

}
