import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainpageComponent } from './core/components/mainpage/mainpage.component';
import { TrainingsComponent } from './core/components/trainings/trainings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeDeleteComponent } from './shared/components/type-delete/type-delete.component';
import { FlashTextComponent } from './shared/components/flash-text/flash-text.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { AboutComponent } from './core/components/about/about.component';
import { ApplicationComponent } from './core/components/application/application.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AdminComponent } from './admin/admin.component';
import { TrainingAdminComponent } from './admin/training-admin/training-admin.component';


import { FormComponent } from './core/components/application/form/form.component';
import { SelectComponent } from './shared/select/select.component';
import { RadioComponent } from './shared/radio/radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicantsAdminComponent } from './admin/applicants-admin/applicants-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { MentorComponent } from './core/components/about/mentor/mentor.component';
import { SchoolComponent } from './core/components/about/school/school.component';
import { TeachersComponent } from './core/components/about/teachers/teachers.component';
import { TeachersAdminComponent } from './admin/teachers-admin/teachers-admin.component';
import { PicUploadComponent } from './admin/pic-upload/pic-upload.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';




@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    TrainingsComponent,
    TypeDeleteComponent,
    FlashTextComponent,
    NotFoundPageComponent,
    AboutComponent,
    ApplicationComponent,
    AdminComponent,
    TrainingAdminComponent,
    FormComponent,
    SelectComponent,
    RadioComponent,
    ApplicantsAdminComponent,
    LoginComponent,
    MentorComponent,
    SchoolComponent,
    TeachersComponent,
    TeachersAdminComponent,
    PicUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireStorageModule,
    NgbModule,
    provideStorage(() => getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
