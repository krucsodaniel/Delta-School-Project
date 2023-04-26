import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, OnDestroy {

  mentorArray?: MentorModel[] = [];
  dataSubscription?: Subscription;

  constructor(
    private router: Router,
    private mentorService: MentorService
  ) { }

  ngOnInit(): void {
    this.dataSubscription = this.mentorService.getAll().subscribe({
      next: (data: MentorModel[]) => this.mentorArray = data
    })
  }

  getClass(index: number, array: MentorModel[]): string {
    if (array.length > 1 && index === 0) {
      return "left-teacher"
    }else if (array.length > 1 && index === array.length-1) {
      return "right-teacher"
    }else {
      return "middle-teacher"
    }
  }


  goToMentor(id: string | undefined) {
    
    if (id) {
      this.router.navigate(['rolunk', id])
    }
  }


  ngOnDestroy(): void {
   this.dataSubscription?.unsubscribe();
  }

}
