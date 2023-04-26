import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first, Subscription } from 'rxjs';
import { ApplicantModel } from 'src/app/model/applicant.model';
import { TrainingModel } from 'src/app/model/training.model';
import { ApplicationService } from 'src/app/services/application.service';
import { TrainingdataService } from 'src/app/services/trainingdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  applicationForm!: FormGroup;

  applicants?: ApplicantModel[];

  trainings?: TrainingModel[];
  
  statusRadioOptions: {id: string, value: string, label: string}[] = [
    {id: 'newStudent', value: 'Nem', label: 'Nem, de szeretnék.'},
    {id: 'student', value: 'Igen', label: 'Igen, ezért is jöttem vissza.'}
  ];

  dataSubscription?: Subscription;


  constructor(
    private applicationService: ApplicationService,
    private trainingDataService: TrainingdataService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    this.applicationService.getAll().subscribe({
      next: (data: ApplicantModel[])=>{this.applicants = data}
    });

    this.dataSubscription = this.trainingDataService.getAll().subscribe({
      next: (data: TrainingModel[])=>{
        this.trainings = data;
        this.trainings = this.trainings.filter(x => this.getApplicantsNumber(x.name) < x.max)
      }
      
    });

    this.applicationService.getAll().subscribe({
      next: (data: ApplicantModel[])=>{this.applicants = data}
    });

    this.applicationForm = new FormGroup({
      // name: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-záéíóöőüű]+ [A-Z][a-záéíóöőüű]+/)]),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[A-ZÁÉÍÓÖŐÜŰÚ][\wáéíóöőúüű'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)]),
      // email: new FormControl('', [Validators.required, Validators.pattern(/^[\S]+@[\S]+\.[a-z]{2,3}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+[0-9 ]{10,20}$/)]),
      course: new FormControl(null, Validators.required),
      studentStatus: new FormControl(null, Validators.required),
      gdprCheck: new FormControl(null, [Validators.required, Validators.requiredTrue])
    })
  }

  async saveApplication(): Promise<void> {

    
    let existingEmail;

    this.applicationService.getByEmail(this.applicationForm.get('email')?.value)
    .pipe(
      first()
    ).subscribe({
      next: data => {
        existingEmail = data;
        console.log(existingEmail.length);

        if(existingEmail.length === 0){
          this.applicationService.create(this.applicationForm.value);
          this.applicationForm.reset();
          this.toastr.success("Sikeres jelentkezés! Munkatársunk hamarosan felkeres a megadott elérhetőségek egyikén.");
        } else {
          this.toastr.error("Email already exists!")
        }
      }
    });
    
    
  }
  
  getApplicantsNumber(name:string):number{
    return this.applicants?.filter(applicant => applicant.course === name).length || 0;
  }

  ngOnDestroy(): void {
    // console.log('jelentkezés leíratkozás');
    this.dataSubscription?.unsubscribe();
  }

}
