import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.scss']
})
export class PicUploadComponent implements OnInit {
  
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  @Input() imgFolder: string;
  @Input() imgName: string;

  @Output() imgUrlEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

  
  uploadFile(event: any) {
    const file = event.target.files[0];
    const filePath = `${this.imgFolder}/${this.imgName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.imgUrlEmitter.emit(url);
        })
      })
      )
      .subscribe()
      
  }

  

}
