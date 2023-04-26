import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {
  
  mentorData?: MentorModel;
  dataSubscription?: Subscription;


  constructor(
    private router: Router, 
    private mentorService: MentorService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.dataSubscription = this.activatedRoute.paramMap.subscribe({
      next: (params: ParamMap) => {
        let mentorId = params.get('id');
        if(mentorId) {
          this.mentorService.getOneById(mentorId).subscribe({
            next: data => this.mentorData = data
          })
        }
      }
    })
  }

  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }

  isArray(obj : any ) {
    return Array.isArray(obj)
 }

}
