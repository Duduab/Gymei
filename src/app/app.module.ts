import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TrainersComponent } from './trainers/trainers.component';
import { HomeComponent } from './home/home.component';
import { TrainplanComponent } from './trainplan/trainplan.component';
import { BmiComponent } from './trainplan/bmi/bmi.component';
import { PurposeComponent } from './trainplan/purpose/purpose.component';
import { QuizComponent } from './trainplan/quiz/quiz.component';
import { BmilistComponent } from './trainplan/bmi/bmilist/bmilist.component';
import { BmiformComponent } from './trainplan/bmi/bmiform/bmiform.component';
import { TrainersdetailsComponent } from './trainers/trainersdetails/trainersdetails.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserdetailsComponent } from './trainplan/userdetails/userdetails.component';
import { PaydialogComponent } from './products/paydialog/paydialog.component';
import {MatDialogModule} from '@angular/material';
import { PlanComponent } from './trainplan/plan/plan.component';
import { TrainerhandleComponent } from './trainerhandle/trainerhandle.component';
import { NgxYoutubePlayerModule} from 'ngx-youtube-player';
import { CommentComponent } from './Comment/comment.component';
import { ExplainvideoComponent } from './explainvideo/explainvideo.component';
import { PlandialogComponent } from './trainplan/plan/plandialog/plandialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    TrainersComponent,
    HomeComponent,
    TrainplanComponent,
    BmiComponent,
    PurposeComponent,
    QuizComponent,
    BmilistComponent,
    BmiformComponent,
    TrainersdetailsComponent,
    ProductsComponent,
    UserdetailsComponent,
    PaydialogComponent,
    PlandialogComponent,
    PlanComponent,
    TrainerhandleComponent,
    CommentComponent,
    ExplainvideoComponent,
    PlandialogComponent
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PaydialogComponent, PlandialogComponent]

})
export class AppModule { }
