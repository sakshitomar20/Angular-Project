import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { SpecialComponent } from './special/special.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"special",component:SpecialComponent},
  {path:"contact",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
