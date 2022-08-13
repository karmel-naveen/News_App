import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CryptonewsComponent } from './cryptonews/cryptonews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:"",component:TopheadingComponent},
  {path:"crypto",component:CryptonewsComponent},
  {path:"business",component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
