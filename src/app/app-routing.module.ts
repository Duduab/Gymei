import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainersComponent } from './trainers/trainers.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {TrainplanComponent} from './trainplan/trainplan.component';
import {PurposeComponent} from './trainplan/purpose/purpose.component';
import {QuizComponent} from './trainplan/quiz/quiz.component';
import {BmiComponent} from './trainplan/bmi/bmi.component';
import {TrainersdetailsComponent} from './trainers/trainersdetails/trainersdetails.component';
import {ProductsComponent} from './products/products.component';
import {UserdetailsComponent} from './trainplan/userdetails/userdetails.component';
import {PlanComponent} from './trainplan/plan/plan.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'trainers' , component: TrainersComponent , children: [
      {path: 'details', component: TrainersdetailsComponent}
    ]},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'trainplan', component: TrainplanComponent , children: [
      {path: 'userdetails', component: UserdetailsComponent},
      {path: 'purpose', component: PurposeComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'bmi', component: BmiComponent},
      {path: 'plan', component: PlanComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
